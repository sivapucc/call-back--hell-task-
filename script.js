let ele = document.createElement("div");
ele.setAttribute("class", "disp");
document.body.append(ele);

setTimeout(() => {
    ele.innerHTML = "10";
    ele.style.color = '#ffea00';
    setTimeout(() => {
        ele.innerHTML = "9";
        ele.style.color = '#168aad';
        setTimeout(() => {
            ele.innerHTML = "8";
            ele.style.color = '#fb8500';
            setTimeout(() => {
                ele.innerHTML = "7";
                ele.style.color = '#147df5';
                setTimeout(() => {
                    ele.innerHTML = "6";
                    ele.style.color = '#d62828';
                    setTimeout(() => {
                        ele.innerHTML = "5";
                        ele.style.color = '#003049';
                        setTimeout(() => {
                            ele.innerHTML = "4";
                            ele.style.color = '#5e548e';
                            setTimeout(() => {
                                ele.innerHTML = "3";
                                ele.style.color = '#457b9d';
                                setTimeout(() => {
                                    ele.innerHTML = "2";
                                    ele.style.color = '#38b000';
                                    setTimeout(() => {
                                        ele.innerHTML = "1";
                                        ele.style.color = '#0077b6';
                                        setTimeout(() => {
                                            ele.innerHTML = "Happy Indipendence Day";
                                            ele.style.color = '#ff006e';
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    },1000)
},1000)