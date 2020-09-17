function openSnoweInNewTab() {
    let url = "http://snowe.sookmyung.ac.kr/";
    whale.tabs.create({ url });
};

function openSnowboardInNewTab() {
    let url = "https://snowboard.sookmyung.ac.kr";
    whale.tabs.create({ url });
}

function openSookmyungInNewTab() {
    let url = "http://www.sookmyung.ac.kr/";
    whale.tabs.create({ url });
}

function openSookmyungPhoneBook() {
    let url = "http://www.sookmyung.ac.kr/sookmyungkr/978/subview.do";
    whale.tabs.create({ url });
}

function openSookmyungCalendar() {
    let url = "http://www.sookmyung.ac.kr/sookmyungkr/1146/subview.do";
    whale.tabs.create({ url });
}

function openSnoway() {
    let url = "http://snoway.sookmyung.ac.kr/";
    whale.tabs.create({ url });
}

function openPortal() {
    let url = "https://portal.sookmyung.ac.kr/";
    whale.tabs.create({ url });
}

function openSnorose() {
    let url = "http://www.snorose.com/";
    whale.tabs.create({ url });
}

function openQuickLinkEnrolment() {
    let url = "https://smap.sookmyung.ac.kr:8443/sap/bc/webdynpro/sap/zcmw2403";
    whale.tabs.create({ url });
}

function openGitRepo() {
    let url = "https://github.com/seohyun0120/quick-sook";
    whale.tabs.create({ url });
}

document.getElementById('clickSnowe').addEventListener('click', openSnoweInNewTab);
document.getElementById('clickSnowboard').addEventListener('click', openSnowboardInNewTab);
document.getElementById('clickSookmyung').addEventListener('click', openSookmyungInNewTab);
document.getElementById('clickSMbook').addEventListener('click', openSookmyungPhoneBook);
document.getElementById('clickSMCalendar').addEventListener('click', openSookmyungCalendar);
document.getElementById('clickSnoway').addEventListener('click', openSnoway);
document.getElementById('clickPortal').addEventListener('click', openPortal);
document.getElementById('clickSnorose').addEventListener('click', openSnorose);
document.getElementById('clickSMEnrollment').addEventListener('click', openQuickLinkEnrolment);
document.getElementById('clickEasterEgg').addEventListener('click', openGitRepo);