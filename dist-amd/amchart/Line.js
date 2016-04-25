!function(t,e){"function"==typeof define&&define.amd?define(["d3","./CommonSerial","../api/INDChart"],e):t.amchart_Line=e(t.d3,t.amchart_CommonSerial,t.api_INDChart)}(this,function(t,e,a){function o(){e.call(this),this._tag="div",this._gType="line"}return o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.prototype._class+=" amchart_Line",o.prototype["implements"](a.prototype),o.prototype.publish("paletteID","default","set","Palette ID",o.prototype._palette["switch"](),{tags:["Basic","Shared"]}),o.prototype.publish("smoothLines",!1,"boolean","Causes chart data lines to draw smoothly",null,{tags:["Basic","Shared"]}),o.prototype.publish("stepLines",!1,"boolean","Causes chart data lines to draw smoothly",null,{tags:["Basic"]}),o.prototype.publish("bulletSize",6,"number","Bullet Size",null,{tags:["Intermediate"]}),o.prototype.publish("bulletType","round","set","Bullet Type",["none","round","square","triangleUp","triangleDown","triangleLeft","triangleRight","bubble","diamond"],{tags:["Basic"]}),o.prototype.enter=function(t,a){e.prototype.enter.apply(this,arguments)},o.prototype.updateChartOptions=function(){return e.prototype.updateChartOptions.apply(this,arguments),this.buildGraphs(this._gType),this._chart},o.prototype.buildGraphs=function(t){function a(t,e){return this.stepLines()?t.type="step":this.smoothLines()?t.type="smoothedLine":t.type="line",t.bullet=this.bulletType(),t.bulletSize=this.bulletSize(),t}this._chart.graphs=[];for(var o=0;o<this.columns().length-1;o++){var p=e.prototype.buildGraphObj.call(this,t,o),i=a.call(this,p,o);this._chart.addGraph(i)}},o.prototype.update=function(t,a){e.prototype.update.apply(this,arguments),this.updateChartOptions(),this._chart.validateNow(),this._chart.validateData()},o});