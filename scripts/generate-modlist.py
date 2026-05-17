#!/usr/bin/env python3
"""generate-modlist.py - Generate modlist.html from packwiz .pw.toml metadata files.

Run from the repository root:
    python scripts/generate-modlist.py
"""

import os
import re
import html
from datetime import date
from pathlib import Path

INDEX_DIR = Path("minecraft/mods/.index")
OUTPUT_FILE = Path("modlist.html")


def parse_pw_toml(path: Path) -> dict:
    """Parse a .pw.toml file and extract name + download source info."""
    text = path.read_text(encoding="utf-8")
    info = {"name": None, "curseforge_id": None, "modrinth_id": None, "url": None}

    for line in text.splitlines():
        m = re.match(r'''^name\s*=\s*'([^']*)'|^name\s*=\s*"([^"]*)"''', line)
        if m:
            info["name"] = m.group(1) or m.group(2)

        m = re.match(r"^project-id\s*=\s*(\d+)", line)
        if m:
            info["curseforge_id"] = m.group(1)

        m = re.match(r"^mod-id\s*=\s*'([^']+)'", line)
        if m:
            info["modrinth_id"] = m.group(1)

        m = re.match(r"^url\s*=\s*'([^']+)'", line)
        if m:
            url_val = m.group(1)
            if url_val.strip():
                info["url"] = url_val

    if not info["name"]:
        info["name"] = path.stem.replace(".pw", "")

    return info


def build_url(info: dict) -> str:
    """Build the best download/project URL from parsed info."""
    if info["curseforge_id"]:
        return f"https://www.curseforge.com/project/{info['curseforge_id']}"
    if info["modrinth_id"]:
        return f"https://modrinth.com/mod/{info['modrinth_id']}"
    if info["url"]:
        return info["url"]
    return ""


def main():
    if not INDEX_DIR.is_dir():
        print(f"Error: index directory not found: {INDEX_DIR}")
        print("Run this script from the repository root.")
        return 1

    # Collect all mods, deduplicating by lowercase name
    mods = {}
    for toml_path in sorted(INDEX_DIR.glob("*.pw.toml")):
        info = parse_pw_toml(toml_path)
        key = info["name"].lower()
        if key not in mods:
            mods[key] = (info["name"], build_url(info))

    if not mods:
        print("Error: no mods found.")
        return 1

    # Sort alphabetically
    sorted_mods = sorted(mods.values(), key=lambda x: x[0].lower())

    # Build HTML
    lines = []
    lines.append("<!DOCTYPE html>")
    lines.append('<html lang="en">')
    lines.append("<head>")
    lines.append('  <meta charset="UTF-8">')
    lines.append("  <title>Create : Arise - Modlist</title>")
    lines.append("  <style>")
    lines.append("    body { font-family: sans-serif; max-width: 800px; margin: 2rem auto; padding: 0 1rem; }")
    lines.append("    h1 { border-bottom: 2px solid #ddd; padding-bottom: 0.5rem; }")
    lines.append("    p { color: #666; }")
    lines.append("    ul { column-count: 2; column-gap: 2rem; }")
    lines.append("    li { margin-bottom: 0.3rem; }")
    lines.append("    a { color: #1a73e8; text-decoration: none; }")
    lines.append("    a:hover { text-decoration: underline; }")
    lines.append("  </style>")
    lines.append("</head>")
    lines.append("<body>")
    today = date.today().isoformat()
    lines.append(f"  <h1>Create : Arise — Modlist ({len(sorted_mods)} mods)</h1>")
    lines.append(f"  <p>Generated from packwiz metadata on {today}.</p>")
    lines.append("  <ul>")

    for name, url in sorted_mods:
        escaped = html.escape(name, quote=True)
        if url:
            lines.append(f'    <li><a href="{url}">{escaped}</a></li>')
        else:
            lines.append(f"    <li>{escaped}</li>")

    lines.append("  </ul>")
    lines.append("</body>")
    lines.append("</html>")

    # Write output (UTF-8 without BOM)
    OUTPUT_FILE.write_text("\r\n".join(lines) + "\r\n", encoding="utf-8")

    print(f"Generated modlist.html with {len(sorted_mods)} mods -> {OUTPUT_FILE}")
    return 0


if __name__ == "__main__":
    exit(main())
