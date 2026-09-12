# Illustrations

Großflächige Brand-Bilder/Illustrationen (keine Icons, keine Logos).
Benennung einheitlich kebab-case, Theme-Varianten via `-light` / `-dark` Suffix.
Seit dem Cleanup nach **Unterordnern** sortiert: `covers/`, `packs/`, `twin/`, `ads/`, `icons-3d/`.

### covers/ — Duotone-Cover (4:3 hoch, je Theme-Paar)

| Datei | Verwendung |
|-------|------------|
| `covers/cover-sofa-light.jpg` / `-dark.jpg` | Frau auf Sofa mit Weinglas — **aktueller Auth-Screen-Hintergrund** (light↔dark). |
| `covers/cover-window-light.jpg` / `-dark.jpg` | Frau am Fenster im Morgenmantel — z. B. Twin-/Create-Onboarding. |
| `covers/auth-bg-light.jpg` / `-dark.jpg` | Frühere Auth-Hintergründe — jetzt **Stil-Referenz** für Nano-Banana-Prompts. |
| `covers/auth-bed.jpg` | **Aktueller Auth-Screen-Hintergrund** (Frau im Bett, Duotone). Wird in Light *und* Dark verwendet. |

### packs/ · twin/ · ads/

| Datei | Verwendung |
|-------|------------|
| `packs/pack-coins.png` · `packs/pack-bag.svg` · `packs/pack-vault.svg` | Credit-Pack-Artwork (Get-Credits). |
| `twin/twin-bg-light.jpg` / `twin/twin-bg-dark.png` | Twin-Feed-Karte / Splash, je Theme. |
| `twin/twin-card.jpg` | Twin-Avatar/Karte. |
| `ads/ad-models.png` | „Create a new model"-Ad (My models). |
| `ads/ad-promo.svg` | Gradient-Hintergrundkunst der „-30%"-Feed-Ad. |
| `ads/feed-model.jpg` | Feed-Referenzbild (Figma-Notes). |

## icons-3d/ — isometrische Flat-3D-Illustrations-Icons (transparentes PNG, 512², Dark+Light tauglich)

Matter Magenta-Stil (Nano-Banana-generiert), Hintergrund freigestellt. Für Empty-States & Key-Moments — **nicht** als Line-Icons in Nav/Listen.

| Datei | Motiv | Geplante Stelle |
|-------|-------|-----------------|
| `icons-3d/empty-subscriptions.png` | Herz über Münzstapel | Empty-State „No subscriptions yet" |
| `icons-3d/empty-payouts.png` | Wallet + Münze | Empty-State „No payouts yet" |
| `icons-3d/empty-chats.png` | Sprechblasen + Herz | Empty-State „No chats yet" / leeres Feed |
| `icons-3d/verify-unlock.png` | Schloss auf Herz-Schild | „Verify to unlock" / gesperrte Earnings |
| `icons-3d/verified-shield.png` | Schild + Häkchen | Verifiziert-Badge / Verification-Panel |
| `icons-3d/daily-bonus.png` | Geschenkbox + Münzen | Daily-Bonus-Promo „Claim free coins" |
| `icons-3d/level-trophy.png` | Pokal + Herz | Creator-Level / „Your bond" |
| `icons-3d/ai-generate.png` | Zauberstab + Sparkles | Create-/Studio-Intro „watch it come to life" |
| `icons-3d/premium-crown.png` | Krone | Go-Premium / VIP-Tier |
| `icons-3d/premium-diamond.png` | Diamant | Premium / höchstes Tier |
| `icons-3d/notifications-bell.png` | Glocke + roter Punkt | Notifications-Empty / Settings |
| `icons-3d/boost-rocket.png` | Rakete | Boost / Promote-Aktion |

### Set 2 — Screen-spezifisch (kontext-getrieben, keine Doubletten)

| Datei | Motiv | Geplante Stelle |
|-------|-------|-----------------|
| `icons-3d/style-mirror.png` | Handspiegel + Sparkle | Detail-Tile „Style" / Look personalisieren |
| `icons-3d/earnings-growth.png` | Münzstapel + Aufwärtspfeil | Settings „Earnings" |
| `icons-3d/privacy-key.png` | Schlüssel | Settings „Privacy" |
| `icons-3d/profile-avatar.png` | ID-Karte + Avatar | Account „Profile" |
| `icons-3d/payouts-bank.png` | Bank + Münze | Account „Payouts / Withdraw" |
| `icons-3d/delete-bin.png` | Mülltonne | Account „Delete account" |
| `icons-3d/content-unlock.png` | Foto-Karte + offenes Schloss | Txn „Content unlock" |
| `icons-3d/statement-receipt.png` | Kassenbon + Münze | „Recent transactions"-Header |
| `icons-3d/tip-heart.png` | Hand reicht Herz-Münze | Action/Txn „Tip" |
| `icons-3d/empty-gallery.png` | Leerer Bilderrahmen + Sparkle | Empty „Gallery is empty" |

### Set 3 — Benefits / Gifts / Bond (eingebaut)

| Datei | Motiv | Stelle |
|-------|-------|--------|
| `icons-3d/benefit-unlimited-chat.png` | Chat-Bubble + ∞ | „What you get" → Unlimited chat 24/7 |
| `icons-3d/benefit-media.png` | Foto-/Video-Karten + Play | „What you get" → Exclusive photos & videos |
| `icons-3d/benefit-gift-bond.png` | offene Box + Herz | „What you get" → Send gifts & grow your bond |
| `icons-3d/benefit-priority.png` | Bubble + Blitz | „What you get" → Priority replies |
| `icons-3d/gift-rose.png` | Rose | „Send a gift" → Rose |
| `icons-3d/gift-box.png` | Geschenkbox + Schleife | „Send a gift" → Gift box |
| `icons-3d/chemistry-bond.png` | zwei Herzen + Sparkle | „Your bond" / Chemistry-Kopf |

`icons-3d/voice-mic.png` — 3D-Mikrofon → Twin-Intro „Your voice, cloned" (+ Settings „Your voice"). 

*(noch offen: Set-3-D Verifizierungs-Hero-Icons camera/face-scan/tax-form/review-pending/verify-failed/age-block)*

**Feste Regel:** 3D-Illustrations-Icons (`.illus3d`) haben **nur** die farbige Boden-Ellipse als Schatten — **nie** einen Kreis/Disc/Ring dahinter. Container-Hintergrund/Radius werden für `*--illus` global auf transparent/0 erzwungen (`!important`), und der Verified-Erfolgs-Ring ist bei Illus-Icons deaktiviert.

Hover-Verhalten: alle `.illus3d` drehen sich on-hover sanft (−6°, scale 1.06, 280 ms ease-out; reduced-motion: aus).

## Regeln
- Echte Pixel-Assets (PNG/JPG/WebP) — als Datei hochladen, nicht als Chat-Bild.
- Referenzieren via relativem Pfad, z. B. `../assets/illustrations/covers/cover-sofa-light.jpg`.
- Theme-Paare immer mit `-light` / `-dark` benennen; im Screen wird per
  `[data-theme="dark"]` zwischen den beiden Bildern umgeschaltet (kein Filter-Hack).
- Dunkles Brand-Motiv, Akzent `#D7034E`. Im Screen liegt ein Overlay/Verlauf darüber.
