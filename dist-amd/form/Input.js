(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/HTMLWidget","../api/IInput","css!./Input"],t):e.form_Input=t(e.d3,e.common_HTMLWidget,e.api_IInput)})(this,function(e,t,n){function r(){t.call(this),n.call(this),this._tag="div",this._inputElement=[]}return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype._class+=" form_Input",r.prototype.implements(n.prototype),r.prototype.publish("type","text","set","Input type",["number","button","date","text","textarea","search","email","time","datetime","hidden"]),r.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments);var r=this;switch(this.type()){case"button":this._inputElement[0]=n.append("button");break;case"textarea":this._inputElement[0]=n.append("textarea");break;default:this._inputElement[0]=n.append("input").attr("type",this.type())}this._inputElement.forEach(function(e,t){e.attr("name",r.name()),e.on("click",function(e){e.click(e)}),e.on("blur",function(e){e.blur(e)}),e.on("change",function(t){r.value([e.property("value")]),t.change(t)})})},r.prototype.update=function(e,n){t.prototype.update.apply(this,arguments);switch(this.type()){case"button":this._inputElement[0].text(this.value());break;case"textarea":this._inputElement[0].property("value",this.value());break;default:this._inputElement[0].attr("type",this.type()),this._inputElement[0].property("value",this.value())}},r});