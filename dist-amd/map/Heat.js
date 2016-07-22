(function(e,t){typeof define=="function"&&define.amd?define(["d3","topojson","./Layer","../other/HeatMap","../common/Palette","css!./Heat"],t):e.map_Heat=t(e.d3,e.topojson,e.map_Layer,e.other_HeatMap,e.common_Palette)})(this,function(e,t,n,r,i){function s(){n.call(this)}return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.prototype._class+=" map_Heat",s.prototype.publish("opacity",1,"number","Opacity",null,{tags:["Advanced"]}),s.prototype.publish("meshColor",null,"html-color","Stroke Color",null,{optional:!0}),s.prototype.publish("meshStrokeWidth",.25,"number","Stroke Width"),s.prototype.layerEnter=function(e,t,i){n.prototype.layerEnter.apply(this,arguments),this._parentOverlay.style("pointer-events","none"),this._heatTransform=i.style("pointer-events","none").append("div").attr("class",this.classID()).style("width",e.width()+"px").style("height",e.height()+"px"),this.heat=(new r).target(this._heatTransform.node())},s.prototype.layerUpdate=function(e){n.prototype.layerUpdate.apply(this,arguments),this._heatTransform.style("opacity",this.opacity()).style("width",e.width()+"px").style("height",e.height()+"px"),this.heat.resize(e.size()),this.heat.columns(this.columns()).data(this.data().map(function(t){var n=e.project(t[0],t[1]);return[n[0],n[1],t[4]]})).render()},s.prototype.layerExit=function(e){delete this._prevProjection,this.heat.target(null),delete this.heat},s.prototype.layerZoomed=function(e){n.prototype.layerZoomed.apply(this,arguments),this.heat.columns(this.columns()).data(this.visible()?this.data().map(function(t){var n=e.project(t[0],t[1]);return[n[0],n[1],t[4]]}):[]).render()},s});