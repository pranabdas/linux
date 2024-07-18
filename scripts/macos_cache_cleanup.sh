sudo rm -rf /Library/Caches/*
sudo rm -rf /Library/Logs/CrashReporter/CoreCapture/*
sudo rm -rf ~/Library/Caches/*
sudo rm -rf ~/Library/Caches/com.apple.ap.adprivacyd/*
sudo rm -rf ~/Library/Caches/com.apple.helpd/*
sudo rm -rf /private/var/folders/*/*/C/com.apple.desktoppicture/*
sudo rm -rf /private/var/folders/*/*/C/clang/*
sudo rm -rf /private/var/folders/*/*/C/com.apple.WebKit.WebContent/*
sudo rm -rf /private/var/folders/*/*/C/com.apple.Safari.SafeBrowsing/*
sudo rm -rf /private/var/folders/*/*/C/com.apple.mediaanalysisd/*
sudo rm -rf /private/var/folders/*/*/C/com.seriflabs.affinityphoto
sudo rm -rf /private/var/folders/*/*/C/com.seriflabs.affinitydesigner
sudo rm -rf /private/var/folders/*/*/C/com.apple.WebKit.WebContent+org.webkit.Playwright
sudo rm -rf /private/var/folders/*/*/C/com.apple.WebKit.Networking+org.webkit.Playwright
sudo rm -rf /private/var/folders/*/*/C/com.apple.WebKit.GPU+org.webkit.Playwright
sudo rm -rf /private/var/folders/*/*/C/com.objective-see.KnockKnock
sudo rm -rf ~/Library/Application\ Support/Caches/*
sudo rm -rf ~/Library/Application\ Support/Authy\ Desktop/Cache/*
sudo rm -rf ~/Library/Application\ Support/Code/Cache/*
sudo rm -rf ~/Library/Application\ Support/Code/CachedData/*
sudo rm -rf ~/Library/Application\ Support/Cypress/Cache/*
sudo rm -rf ~/Library/Application\ Support/EndNote/Updates/*
sudo rm -rf ~/Library/Application\ Support/Evernote/Cache/*
sudo rm -rf ~/Library/Application\ Support/Microsoft/Teams/tmp/*
sudo rm -rf ~/Library/Application\ Support/Signal/update-cache/*
sudo rm -rf ~/Library/Application\ Support/Slack/Cache/*
sudo rm -rf ~/Library/Containers/desktop.WhatsApp/Data/Library/Application\ Support/WhatsApp/Cache/*
sudo rm -rf ~/Library/Containers/com.apple.Safari/Data/Library/Caches/CloudKit/*
sudo rm -rf ~/Library/Containers/com.apple.Safari/Data/Library/Caches/com.apple.Safari/WebKitCache/*
sudo rm -rf ~/Library/Containers/com.apple.AvatarUI.AvatarPickerMemojiPicker/Data/Library/Caches/com.apple.AvatarKit/*
sudo rm -rf ~/Library/Containers/com.apple.AppStore/Data/Library/Caches/com.apple.AppStore/*
sudo rm -rf ~/Library/Containers/com.apple.geod/Data/Library/Caches/com.apple.geod/*
sudo rm -rf ~/Library/Containers/com.apple.AMPArtworkAgent/Data/Library/Caches/com.apple.AMPArtworkAgent/*
sudo rm -rf ~/Library/Containers/com.apple.podcasts/Data/Library/Caches/com.apple.podcasts/*
sudo rm -rf ~/Library/Containers/com.microsoft.onenote.mac/Data/Library/Caches/Microsoft/*
sudo rm -rf ~/Library/Containers/com.microsoft.Word/Data/Library/Caches/Microsoft/*
sudo rm -rf ~/Library/Containers/com.apple.weather.widget/Data/Library/Caches/com.apple.weather.widget/*
sudo rm -rf ~/Library/Containers/com.apple.Notes/Data/Library/Caches/CloudKit/*
sudo rm -rf ~/Library/Containers/com.apple.mail/Data/Library/Caches/CloudKit/*
sudo rm -rf ~/Library/Containers/com.apple.iBooksX/Data/Library/Caches/*
sudo rm -rf ~/Library/Containers/com.apple.weather/Data/Library/Caches/*
sudo rm -rf ~/Library/Containers/com.apple.mail/Data/Library/Mail\ Downloads/*
sudo rm -rf ~/Library/Saved\ Application\ State/com.electron.docker-frontend.savedState
sudo rm -rf ~/Library/Saved\ Application\ State/org.darktable.savedState
sudo rm ~/Library/Preferences/org.webkit.Playwright.plist
sudo rm ~/Library/Preferences/com.objective-see.KnockKnock.plist
sudo rm ~/Library/Preferences/com.electron.docker-frontend.plist
sudo rm ~/Library/Preferences/org.darktable.plist
sudo rm ~/Library/Preferences/diagnostics_agent.plist
if command -v npm &> /dev/null; then
    npm cache clean --force
fi
if command -v yarn &> /dev/null; then
    yarn cache clean --force
fi
