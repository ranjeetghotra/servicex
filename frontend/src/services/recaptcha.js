
const loadScriptByURL = (id, url, callback) => {
    const isScriptExist = document.getElementById(id);

    if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
            if (callback) callback();
        };
        document.body.appendChild(script);
    }

    if (isScriptExist && callback) callback();
}

export const loadScript = () => {
    loadScriptByURL('recaptchaId12', `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_RECAPTCHA_KEY}`, function () {
        console.log("Recaptcha loaded!");
    });
}

export const verifyCaptcha = () => {
    return new Promise((resolve, reject) => {
        window.grecaptcha.ready(() => {
            window.grecaptcha.execute(process.env.REACT_APP_RECAPTCHA_KEY, { action: 'submit' }).then(resolve).catch(reject);
        });
    })
}
