# Create : Arise Modpack

A Minecraft 1.21.1 NeoForge modpack for PrismLauncher.

## Quick Start (First Time Setup)

### Prerequisites
- [PrismLauncher](https://prismlauncher.org/) installed
- Java 21 (PrismLauncher can manage this automatically)

### Setup

1. **Clone this repository** into your PrismLauncher instances folder:
   ```
   git clone <repo-url> "Create - Arise"
   ```
   The instances folder is typically located at:
   - Windows: `%APPDATA%\PrismLauncher\instances\`
   - Linux: `~/.local/share/PrismLauncher/instances/`
   - macOS: `~/Library/Application Support/PrismLauncher/instances/`

2. **Open PrismLauncher** — the "Create : Arise" instance should appear.

3. **Configure the Pre-Launch Command** (so mods auto-download):
   - Right-click the instance → **Edit**
   - Go to the **Settings** tab
   - Scroll down to **Pre-launch command**
   - Check **Enable**
   - Enter:
     ```
     "$INST_JAVA" -jar packwiz-installer-bootstrap.jar --pack-file pack.toml
     ```
   - Click **Close**

4. **Launch the instance** — `packwiz-installer` will download all 168 mods automatically on first launch. This may take a few minutes.

5. **(Optional) Download shader packs and resource packs:**
   See the "Optional Add-ons" section below.

## Optional Add-ons

These files are excluded from git due to size/licensing. Download and place them manually:

### Shader Packs

| Pack | Download |
|------|----------|
| ComplementaryReimagined r5.7.1 | [CurseForge](https://www.curseforge.com/minecraft/customization/complementary-reimagined) |
| ComplementaryReimagined r5.7.1 + EuphoriaPatches 1.8.6 | [CurseForge](https://www.curseforge.com/minecraft/customization/euphoria-patches) |

Place the `.zip` files in `minecraft/shaderpacks/`.

### Resource Packs

| Pack | Notes |
|------|-------|
| FreshAnimations v1.10.4 | Fresh animations for mobs |
| FA+ Player v1.0 | Player model add-on for FreshAnimations |
| Gentler Weather Sounds 2.2.0 | Softer weather audio |
| Os' Colorful Grasses (Mix) | Colorful grass variation |
| Connected-Bricks v1.0 | Connected brick textures |

Place the `.zip` files in `minecraft/resourcepacks/`.

**Note:** These packs are tracked as optional. If you add custom packs, don't commit them — the `.gitignore` excludes `.zip` files in those folders.

## How It Works

- **Mod metadata** (`.pw.toml` files in `minecraft/mods/.index/`) are tracked in git — these are small text files (~1KB each) that describe each mod.
- **Actual mod JARs** are excluded from git via `.gitignore`. They're downloaded by `packwiz-installer` on first launch.
- **`pack.toml`** configures the packwiz pack, pointing to the mod index and defining the Minecraft/NeoForge versions.
- On each launch, `packwiz-installer` checks whether mods are present and up-to-date, downloading any that are missing.

## Updating Mods
1. Pull the latest changes from git
2. The `.pw.toml` metadata will be updated
3. On next launch, `packwiz-installer` will detect the changes and download updated mods

To add a new mod manually:
1. Use `packwiz curseforge add <project-id>` (requires [packwiz CLI](https://github.com/packwiz/packwiz))
2. Commit the new `.pw.toml` file

## Modlist

[`modlist.html`](modlist.html) is an auto-generated HTML file listing every mod in the pack. To regenerate it after adding/removing mods:

```bash
python scripts/generate-modlist.py
```

> **Note:** The script reads the `.pw.toml` metadata files in `minecraft/mods/.index/` — you don't need the packwiz CLI installed. [Python 3](https://www.python.org/downloads/) is required.

## Repository Structure

```
Create - Arise/
├── pack.toml                          # Packwiz pack configuration
├── packwiz-installer.jar              # Packwiz installer (runtime downloader)
├── packwiz-installer-bootstrap.jar    # Bootstrap for auto-updating installer
├── instance.cfg                       # PrismLauncher instance configuration
├── mmc-pack.json                      # MultiMC pack metadata
├── flame/                             # CurseForge manifest (for reference)
│   ├── manifest.json
│   └── overrides.txt
├── minecraft/
│   ├── config/                        # All mod configs (tracked in git)
│   ├── kubejs/                        # KubeJS scripts (tracked in git)
│   ├── mods/
│   │   └── .index/                    # Packwiz metadata for all 168 mods
│   ├── scripts/                       # Utility scripts
│   │   └── generate-modlist.py        # Regenerates modlist.html
│   ├── resourcepacks/                 # (excluded — add manually)
│   └── shaderpacks/                   # (excluded — add manually)
└── .gitignore
```
