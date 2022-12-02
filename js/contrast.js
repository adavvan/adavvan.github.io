function ChangeContrastMode()
{
    let button = document.getElementById("cont");
    let head = document.getElementsByTagName('HEAD')[0];

    if (button.value == "off") 
    {
        let link = document.createElement('link');
        link.id = "contrast";
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/contrast.css';
        head.appendChild(link);
        button.value = "on";
    }
    else 
    {
        head.removeChild(document.getElementById("contrast"));
        button.value = "off";
    }
}