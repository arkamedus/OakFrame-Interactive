import {Sprite} from "./Sprite";

export class AssetLoader {
    public queued;
    public loaded;
    constructor (){
        this.queued = 0;
        this.loaded = 0;
    }
    loadSprite(src, preload = true){
        let self = this;
        this.queued ++;
        let s = new Sprite({src: src});
        s.on('load',function(){
            self.loaded++;
        });
        if (preload) { s.getImage(); }
        return s;
    }

    loadFile(src, func) {
        //AssetManager.total_items++;
/*
        var xmlhttp = new XMLHttpRequest();
        xmlhttp._loaded = false;
        xmlhttp.onreadystatechange = function () {
            //console.log(xmlhttp);
            if (!xmlhttp._loaded && xmlhttp.readyState === 4 && (xmlhttp.status === 200 || xmlhttp.responseText)) {
                func(xmlhttp.responseText);
                //AssetManager.loaded_items++;
                //console.log('loaded!');
                xmlhttp._loaded = true;
            }
        };
        xmlhttp.open("GET", src, true);
        xmlhttp.send();*/
    }
}