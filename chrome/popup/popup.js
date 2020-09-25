const SnoweURL = "http://snowe.sookmyung.ac.kr/";
const SnowayURL = "http://snoway.sookmyung.ac.kr/";
const GitRepoURL = "https://github.com/seohyun0120/quick-sook";
const SnoroseURL = "http://www.snorose.com/";
const SnowboardURL = "https://snowboard.sookmyung.ac.kr";
const SookmyungCalURL = "http://www.sookmyung.ac.kr/sookmyungkr/978/subview.do";
const SookmyungHomeURL = "http://www.sookmyung.ac.kr/";
const SookmyungPortalURL = "http://snoway.sookmyung.ac.kr/";
const SookmyungPhoneBookURL = "http://www.sookmyung.ac.kr/sookmyungkr/978/subview.do";
const SookmyungQuickEnrollmentURL = "https://smap.sookmyung.ac.kr:8443/sap/bc/webdynpro/sap/zcmw2403";

function openURLInNewTab(url) {
    chrome.tabs.create({ url });
}

document.getElementById('clickSnowe').addEventListener('click', () => { openURLInNewTab(SnoweURL) }, false);
document.getElementById('clickSnowboard').addEventListener('click', () => { openURLInNewTab(SnowboardURL) }, false);
document.getElementById('clickSookmyung').addEventListener('click', () => { openURLInNewTab(SookmyungHomeURL) }, false);
document.getElementById('clickSMbook').addEventListener('click', () => { openURLInNewTab(SookmyungPhoneBookURL) }, false);
document.getElementById('clickSMCalendar').addEventListener('click', () => { openURLInNewTab(SookmyungCalURL) }, false);
document.getElementById('clickSnoway').addEventListener('click', () => { openURLInNewTab(SnowayURL) }, false);
document.getElementById('clickPortal').addEventListener('click', () => { openURLInNewTab(SookmyungPortalURL) }, false);
document.getElementById('clickSnorose').addEventListener('click', () => { openURLInNewTab(SnoroseURL) }, false);
document.getElementById('clickSMEnrollment').addEventListener('click', () => { openURLInNewTab(SookmyungQuickEnrollmentURL) }, false);
document.getElementById('clickEasterEgg').addEventListener('click', () => { openURLInNewTab(GitRepoURL) }, false);
