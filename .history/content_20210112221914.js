var interval = setInterval(function () {
    if (getElementByXpath("/html/body/div[1]/div/div[1]/div[2]/div/div[3]/div/div[2]/table/tbody/tr/td[2]/div")) {
        clearInterval(interval);
        Promise.resolve(Step1()).then(function (a) {
            return Step2();
        }).then(function (b) {
            Step3();
        }).then(function (c) {
            Step4();
        }).then(function (d) {
            Step5();
        }).then(function (e) {
            Step6();
        }).then(function (f) {
            Step7();
        }).then(function (g) {
            Step8();
        }).then(function (h) {
            PlaySound()
        })
        return;
    }
    refreshPage();
}, 3000);

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function refreshPage() {
    kk++;
    if (getElementByXpath("/html/body/div[1]/div/div[1]/div[2]/div/div[4]/div/div/a[6]/span/span/span[2]")) {
        getElementByXpath("/html/body/div[1]/div/div[1]/div[2]/div/div[4]/div/div/a[6]/span/span/span[2]").click();
        console.log("Page refresh! No Job Yet." + kk);
    } else {
        console.log("Could not refresh!");
    }
}

// function Steps() {
//     if (getElementByXpath("/html/body/div[1]/div/div[1]/div[2]/div/div[3]/div/div[2]/table/tbody/tr/td[2]/div")) {
//         clearInterval(repeatSteps); //stop refreshing
//         Promise.resolve(Step1()).then(function (a) {
//             return Step2();
//         }).then(function (b) {
//             Step3();
//         }).then(function (c) {
//             Step4();
//         }).then(function (d) {
//             Step5();
//         }).then(function (e) {
//             Step6();
//         }).then(function (f) {
//             Step7();
//         }).then(function (g) {
//             Step8();
//         }).then(function (h) {
//             PlaySound()
//         })
//         setTimeout(function () { repeatSteps = setInterval(refreshPage, 3000); }, 25000);
//     }
// }

//play sound to inform
function PlaySound() {
    let url = chrome.runtime.getURL('sound.mp3')
    let a = new Audio(url)
    a.play()
    console.log('(sound play)');
}

//click /td[2]/div
function Step1() {
    if (getElementByXpath("/html/body/div[1]/div/div[1]/div[2]/div/div[3]/div/div[2]/table/tbody/tr/td[2]/div")) {
        getElementByXpath("/html/body/div[1]/div/div[1]/div[2]/div/div[3]/div/div[2]/table/tbody/tr/td[2]/div").click();
    } else {
        console.log("Element with XPath '/html/body/div[1]/div/div[1]/div[2]/div/div[3]/div/div[2]/table/tbody/tr/td[2]/div' not found");
    }
    console.log('Clicked on /td[2]/div.');
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(200); }, 200);
    });
}

//click //div[3]/div[2]/div/div/div/a/span/span/span[2]
function Step2() {
    if (getElementByXpath("//div[3]/div[2]/div/div/div/a/span/span/span[2]")) {
        getElementByXpath("//div[3]/div[2]/div/div/div/a/span/span/span[2]").click();
    } else {
        console.log("Element with XPath '//div[3]/div[2]/div/div/div/a/span/span/span[2]' not found");
    }
    console.log('Clicked on //div[3]/div[2]/div/div/div/a/span/span/span[2].');
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(4000); }, 4000);
    });
}

//click //td[5]/div/div
function Step3() {
    if (getElementByXpath("//td[5]/div/div")) {
        getElementByXpath("//td[5]/div/div").click();
    } else {
        console.log("Element with XPath '//td[5]/div/div' not found");
    }
    console.log('Clicked on //td[5]/div/div.');
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(200); }, 200);
    });
}

//click //div[3]/div/div/span
function Step4() {
    if (getElementByXpath("//div[3]/div/div/span")) {
        getElementByXpath("//div[3]/div/div/span").click();
    } else {
        console.log("Element with XPath '//div[3]/div/div/span' not found");
    }
    console.log('Clicked on //div[3]/div/div/span.');
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(200); }, 200);
    });
}

//click //div[13]/div[4]/div/div/a[2]/span/span/span[2]
function Step5() {
    if (getElementByXpath("//div[13]/div[4]/div/div/a[2]/span/span/span[2]")) {
        getElementByXpath("//div[13]/div[4]/div/div/a[2]/span/span/span[2]").click();
    } else {
        console.log("Element with XPath '//div[13]/div[4]/div/div/a[2]/span/span/span[2]' not found");
    }
    console.log('Clicked on //div[13]/div[4]/div/div/a[2]/span/span/span[2].');
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(200); }, 200);
    });
}

//click //div[16]/div[4]/div/div/a[4]/span/span/span[2]
function Step6() {
    if (getElementByXpath("//div[16]/div[4]/div/div/a[4]/span/span/span[2]")) {
        getElementByXpath("//div[16]/div[4]/div/div/a[4]/span/span/span[2]").click();
    } else {
        console.log("Element with XPath '//div[16]/div[4]/div/div/a[4]/span/span/span[2]' not found");
    }
    console.log('Clicked on //div[16]/div[4]/div/div/a[4]/span/span/span[2].');
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(200); }, 200);
    });
}

//click //div[14]/div[2]/div/div/div[2]/div
function Step7() {
    if (getElementByXpath("//div[14]/div[2]/div/div/div[2]/div")) {
        getElementByXpath("//div[14]/div[2]/div/div/div[2]/div").click();
    } else {
        console.log("Element with XPath '//div[14]/div[2]/div/div/div[2]/div' not found");
    }
    console.log('Clicked on //div[14]/div[2]/div/div/div[2]/div.');
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(200); }, 200);
    });
}

//click //a[6]/span/span/span[2]
function Step8() {
    if (getElementByXpath("//a[6]/span/span/span[2]")) {
        getElementByXpath("//a[6]/span/span/span[2]").click();
    } else {
        console.log("Element with XPath '//a[6]/span/span/span[2]' not found");
    }
    console.log('Clicked on //a[6]/span/span/span[2].');
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(200); }, 200);
    });
}