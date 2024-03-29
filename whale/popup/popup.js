const SnoweURL = "https://snowe.sookmyung.ac.kr";
const SnowayURL = "https://snoway.sookmyung.ac.kr";
const GitRepoURL = "https://github.com/seohyun0120/quick-sook";
const SnoroseURL = "http://www.snorose.com/";
const SnowboardURL = "https://snowboard.sookmyung.ac.kr";
const SookmyungCalURL = "https://www.sookmyung.ac.kr/kr/university-life/academic-calendar.do?mode=list";
const SookmyungHomeURL = "https://www.sookmyung.ac.kr";
const SookmyungPortalURL = "https://portal.sookmyung.ac.kr";
const SookmyungPhoneBookURL = "https://www.sookmyung.ac.kr/kr/intro/school-number.do";
const SookmyungQuickEnrollmentURL = "https://smap.sookmyung.ac.kr:8443/sap/bc/webdynpro/sap/zcmw2403";
const SookmyungWiseURL = "https://wise.sookmyung.ac.kr/";
const SookmyungLibraryURL = "https://lib.sookmyung.ac.kr/";
const SookmyungClassCourseURL = "https://portal.sookmyung.ac.kr/irj/servlet/prt/portal/prtmode/preview/prtroot/pcd!3aportal_content!2fedu.sookmyung.externalLink_folder!2fedu.sookmyung.iviews_folder!2fedu.sookmyung.zcmw2237?sap-config-mode=true";
const SMUWhitePaperURL= "https://smuwhitepaper.web.app/";

function openURLInNewTab(url) {
    whale.tabs.create({ url });
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
document.getElementById('clickSMWise').addEventListener('click', () => { openURLInNewTab(SookmyungWiseURL) }, false);
document.getElementById('clickSMLibrary').addEventListener('click', () => { openURLInNewTab(SookmyungLibraryURL) }, false);
document.getElementById('clickClassCourse').addEventListener('click', () => { openURLInNewTab(SookmyungClassCourseURL) }, false);
document.getElementById('clickSMUWhitePaper').addEventListener('click', () => { openURLInNewTab(SMUWhitePaperURL) }, false);
document.getElementById('clickEasterEgg').addEventListener('click', () => { openURLInNewTab(GitRepoURL) }, false);

let easterEggId = document.getElementById('clickEasterEgg');
easterEggId.addEventListener('mouseover', hoverNoonsong, false);
easterEggId.addEventListener('mouseout', unhoverNoonsong, false);

function hoverNoonsong() {
    easterEggId.setAttribute('src', '../icons/quickSookLogo.png');
}

function unhoverNoonsong() {
    easterEggId.setAttribute('src', '../icons/quickSookLogo2.png');
}
