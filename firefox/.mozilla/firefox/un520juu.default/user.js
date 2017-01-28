//
/*
There isn't much official documentation for what many values do

Notes:
https://www.privacytools.io/#about_config
http://www.logicalincrements.com/firefox/
https://github.com/allo-/firefox-profilemaker/blob/master/forms.py
https://wiki.archlinux.org/index.php/Firefox/Tweaks
https://wiki.archlinux.org/index.php/Firefox/Privacy
http://kb.mozillazine.org/About:config_entries (lots out of date)
*/

user_pref("beacon.enabled", false);

// Disable Google blacklists
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

// Use DuckDuckGo as default search engine
user_pref("browser.search.defaultenginename", "DuckDuckGo");

// Don't send pings (can be used for tracking clicks)
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

// Don't check if Firefox is the default browser
user_pref("browser.shell.checkDefaultBrowser", false);

// Use custom home page
user_pref("browser.startup.homepage", "file:/home/jl/homepage.html"); // hard coded since afaik it won't expand $HOME

// Disable tab animations
user_pref("browser.tabs.animate", false);
user_pref("browser.fullscreen.animate", false);

// Don't close Firefox when last tab is closed
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Don't trim URLs
user_pref("browser.urlbar.trimURLs", false);

// Don't automatically copy selected text
user_pref("clipboard.autocopy", false);

// Disable battery status
user_pref("dom.battery.enabled", false);

// Disable clipboard events
user_pref("dom.event.clipboardevents.enabled", false);

// Disable Pocket
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.site", "");

// Disable about:config warning
user_pref("general.warnOnAboutConfig", false);

// Disable geolocation
user_pref("geo.enabled", false);

// Disable WebRTC
user_pref("media.navigator.enabled", false);
user_pref("media.peerconnection.enabled", false);
//
user_pref("media.peerconnection.ice.default_address_only", true);

// Block third party cookies
user_pref("network.cookie.cookieBehavior", 1);

// Keep cookies only until the end of the session
user_pref("network.cookie.lifetimePolicy", 2);

// Disable DNS proxy bypass (default)
user_pref("network.proxy.socks_remote_dns", false);

// Clear history and other data when Firefox closes
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
//user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
//user_pref("privacy.clearOnShutdown.siteSettings", true);

// Speed up delay when installing addons (default 1000)
user_pref("security.dialog_enable_delay", 100);

// Disable Social Service API
user_pref("social.remote-install.enabled", false);
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.toast-notifications.enabled", false);
user_pref("social.directories", "");
user_pref("social.shareDirectory", "");
user_pref("social.whitelist", "");

// Disable telemetry
user_pref("toolkit.telemetry.enabled", false);

// Disable WebGL
user_pref("webgl.disabled", true);
