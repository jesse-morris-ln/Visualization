(function(e,t){typeof define=="function"&&define.amd?define(["d3","./Layer","./Utility","../common/Palette","../common/Utility","css!./Pins"],t):e.map_Pins=t(e.d3,e.map_Layer,e.map_Utility,e.common_Palette,e.common_Utility)})(this,function(e,t,n,r,i){function s(){t.call(this),i.SimpleSelectionMixin.call(this),this._geohash=new n.Geohash}return s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.prototype._class+=" map_Pins",s.prototype.mixin(i.SimpleSelectionMixin),s.prototype.publish("geohashColumn",null,"set","Geohash column",function(){return this.columns()},{optional:!0}),s.prototype.publish("tooltipColumn",null,"set","Tooltip column",function(){return this.columns()},{optional:!0}),s.prototype.publish("opacity",1,"number","Opacity",null,{tags:["Advanced"]}),s.prototype.publish("fillColor","#00FFDD","html-color","Pin Color",null,{optional:!0}),s.prototype.publish("strokeWidth",.5,"number","Pin Border Thickness (pixels)",null,{tags:["Basic"]}),s.prototype.publish("strokeColor","#000000","html-color","Pin Border Color",null,{optional:!0}),s.prototype.publish("fontSize",18,"number","Font Size",null,{tags:["Basic","Shared"]}),s.prototype.publish("fontFamily","Verdana","string","Font Name",null,{tags:["Basic","Shared","Shared"]}),s.prototype.publish("fontColor","#000000","html-color","Font Color",null,{tags:["Basic","Shared"]}),s.prototype.publish("pinType","pin","set","Pin Type",["pin","circle","rectangle","rectangle-pin"],{tags:["Basic"]}),s.prototype.publish("arrowWidth",8,"number","Pin arrow width (pixels)",null,{tags:["Basic"],disable:function(e){return["pin","rectangle-pin"].indexOf(e.pinType())===-1}}),s.prototype.publish("arrowHeight",12,"number","Pin arrow height (pixels)",null,{tags:["Basic"],disable:function(e){return["pin","rectangle-pin"].indexOf(e.pinType())===-1}}),s.prototype.publish("pinWidth",20,"number","Width of pin (pixels)",null,{tags:["Basic"],disable:function(e){return["rectangle","rectangle-pin"].indexOf(e.pinType())===-1}}),s.prototype.publish("pinHeight",20,"number","Height of pin (pixels) (not including arrow)",null,{tags:["Basic"],disable:function(e){return["rectangle","rectangle-pin"].indexOf(e.pinType())===-1}}),s.prototype.publish("cornerRadius",10,"number","Radius of rectangular pin corners (pixels)",null,{tags:["Basic"],disable:function(e){return["rectangle","rectangle-pin"].indexOf(e.pinType())===-1}}),s.prototype.publish("pinRadius",12,"number","Radius of circle (pixels)",null,{tags:["Basic"],disable:function(e){return e.pinType()!=="circle"}}),s.prototype.publish("textBaseline","central","set","Pin text vertical alignment",["auto","use-script","no-change","reset-size","ideographic","alphabetic","hanging","mathematical","central","middle","text-after-edge","text-before-edge","inherit"],{tags:["Basic"]}),s.prototype.pinsData=function(){var e=this._db.fieldByLabel(this.geohashColumn()),t=this._db.fieldByLabel(this.tooltipColumn());return this.data().map(function(n){var r=[n[0],n[1],n[2]instanceof Object?n[2]:{}];r[2].origRow=n;if(e)try{var i=this._geohash.bounds(n[e.idx]);r[0]=(i.ne.lat+i.sw.lat)/2,r[1]=(i.ne.lon+i.sw.lon)/2}catch(s){}return t&&(r[2].tooltip=n[t.idx]),r},this)},s.prototype.layerEnter=function(n,r,i){t.prototype.layerEnter.apply(this,arguments),this._pinsTransform=r,this._selection.widgetElement(this._pinsTransform),this.pinsPaths=e.select(null)},s.prototype.layerUpdate=function(e){t.prototype.layerUpdate.apply(this,arguments),this._pinsTransform.style("opacity",this.opacity()),this.pinsPaths=this._pinsTransform.selectAll(".pin").data(this.visible()?this.pinsData():[],function(e){return e[0]});var n=this,r=this.pinsPaths.enter().append("g").attr("class","pin");r.append("path").attr("class","data").call(this._selection.enter.bind(this._selection)).on("click",function(e){n.click(n.rowToObj(e[2].origRow),"geohash",n._selection.selected(this))}).on("mouseover",function(e){this.parentNode.appendChild(this)}).append("title"),r.append("text").attr("text-anchor","middle"),this.pinsPaths.selectAll("text").style("stroke",this.fontColor()).style("fill",this.fontColor()).style("font-size",this.fontSize()).style("font-family",this.fontFamily()).style("dominant-baseline",this.textBaseline()).attr("dx",0).attr("dy",this.pinTextDY()).text(function(e){return e[2]&&e[2].text?e[2].text:""});var i=this.svgPinPath();this.pinsPaths.selectAll("path.data").attr("d",i).attr("stroke-width",this.strokeWidth()+"px").style("display",function(t){var n=e.project(t[0],t[1]);return n?null:"none"}).style("stroke",function(e){return e[2]&&e[2].strokeColor?e[2].strokeColor:n.strokeColor()}).style("fill",function(e){return e[2]&&e[2].fillColor?e[2].fillColor:n.fillColor()}),this.pinsPaths.select("title").text(function(e){return e[2]&&e[2].tooltip?e[2].tooltip:""}),this.pinsPaths.exit().remove()},s.prototype.layerZoomed=function(e){t.prototype.layerZoomed.apply(this,arguments),this.pinsPaths.attr("transform",function(t){var n=e.project(t[0],t[1]);return n||(n=[0,0]),"translate("+n[0]+", "+n[1]+")scale("+1+")"})},s.prototype.pinTextDY=function(){switch(this.pinType()){case"pin":case"rectangle-pin":return-this.arrowHeight();case"circle":case"rectangle":return 0}},s.prototype.svgPinPath=function(){switch(this.pinType()){case"pin":return this.circlePinPath();case"circle":return this.circlePath();case"rectangle":return this.rectanglePath();case"rectangle-pin":return this.rectanglePinPath()}},s.prototype.rectanglePinPath=function(){var e=this.pinWidth(),t=this.pinHeight(),n=this.cornerRadius(),r=this.arrowHeight(),i=this.arrowWidth(),s=0-e/2,o=0-t+n,u=(e-n*2-i)/2;return"M"+s+","+o+"a"+ -n+","+ -n+" 0 0 1 "+n+","+ -n+"h"+(e+ -n*2)+"a"+n+","+n+" 0 0 1 "+n+","+n+"v"+(t+ -n*2)+"a"+n+","+n+" 0 0 1 "+ -n+","+n+"h"+ -u+"l"+ -i/2+","+r+"l"+ -i/2+","+ -r+"h"+ -u+"a"+ -n+","+ -n+" 0 0 1 "+ -n+","+ -n+"z"},s.prototype.rectanglePath=function(){var e=this.pinWidth(),t=this.pinHeight(),n=this.cornerRadius(),r=-e/2,i=-t/2;return i+=n,"M"+r+","+i+"a"+ -n+","+ -n+" 0 0 1 "+n+","+ -n+"h"+(e+ -n*2)+"a"+n+","+n+" 0 0 1 "+n+","+n+"v"+(t+ -n*2)+"a"+n+","+n+" 0 0 1 "+ -n+","+n+"h"+(-e+n*2)+"a"+ -n+","+ -n+" 0 0 1 "+ -n+","+ -n+"z"},s.prototype.circlePinPath=function(){var e=this.arrowHeight(),t=this.arrowWidth(),n=0-t/2,r=0-e,i=t/2,s=e,o=-i,u=-s,a=t+i,f=u,l=t,c=0;return"M"+n+","+r+"c"+o+" "+u+", "+a+" "+f+", "+l+" "+c+"l"+ -t/2+","+e+"l"+ -t/2+","+ -e+"z"},s.prototype.circlePath=function(){var e=this.pinRadius(),t=e/2,n=0,r=e/2,i=e/2;return"M"+t+","+n+"a "+r+" "+i+" 0 1 0 0 0.01 0"+"z"},s.prototype.click=function(e,t,n){console.log("Click:  "+JSON.stringify(e)+", "+t+", "+n)},s});