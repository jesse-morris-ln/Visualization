(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/HTMLWidget","amcharts.serial","require","../common/Utility","./SerialAxis"],t):e.amchart_CommonSerial=t(e.d3,e.common_HTMLWidget,e.AmCharts,e.require,e.common_Utility,e.amchart_SerialAxis)})(this,function(e,t,n,r,i,s){function o(){t.call(this),this._tag="div",this._chart={},this._selected=null,this._selections=[],this._dataUpdated=0,this._prevDataUpdated=-1,this._columnsUpdated=0,this._prevColumnsUpdated=-1,this._dateParserData=e.time.format("%Y-%m-%d").parse,this._dateParserValue=e.time.format("%Y-%m-%d").parse,this._colorObj={},this._selectionObj={},this._xAxis=new s,this._xAxis.owningWidget=this,this._yAxis=new s,this._yAxis.owningWidget=this}return o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.prototype._class+=" amchart_CommonSerial",o.prototype.publish("backwardsCompatible",!0,"boolean","Allow use of old publish parameters"),o.prototype.publish("xAxes",[],"propertyArray","xAxis",null,{max:1,tags:["Basic"]}),o.prototype.publish("yAxes",[],"propertyArray","yAxis",null,{tags:["Basic"]}),o.prototype.publish("fontSize",11,"number","Font Size",null,{tags:["Basic","Shared"]}),o.prototype.publish("fontFamily","Verdana","string","Font Name",null,{tags:["Basic","Shared","Shared"]}),o.prototype.publish("fontColor","#000000","html-color","Font Color",null,{tags:["Basic","Shared"]}),o.prototype.publish("lineWidth",1,"number","Line Thickness",null,{min:0,max:10,step:1,inputType:"range",tags:["Basic","Shared"]}),o.prototype.publish("lineColor",null,"html-color","Color of the data/content lines",null,{tags:["Basic","Shared"]}),o.prototype.publish("lineOpacity",1,"number","Line Opacity",null,{min:0,max:1,step:.001,inputType:"range",tags:["Basic","Shared"]}),o.prototype.publish("dashedLineStyle",0,"number","Length of Dashed Line. 0 = none",null,{tags:["Advanced","Shared"]}),o.prototype.publish("marginLeft",null,"number","Margin (Left)",null,{tags:["Intermediate"]}),o.prototype.publish("marginRight",null,"number","Margin (Right)",null,{tags:["Intermediate"]}),o.prototype.publish("marginTop",null,"number","Margin (Top)",null,{tags:["Intermediate"]}),o.prototype.publish("marginBottom",null,"number","Margin (Bottom)",null,{tags:["Intermediate"]}),o.prototype.publish("showScrollbar",!1,"boolean","Show Chart Scrollbar",null,{tags:["Intermediate","Shared"]}),o.prototype.publish("orientation","horizontal","set","Orientation",["horizontal","vertical"],{tags:["Intermediate"]}),o.prototype.publish("startDuration",.3,"number","Start Duration (sec)",null,{tags:["Private"]}),o.prototype.publish("useImgPatterns",!1,"boolean","Enable Image Pattern backgrounds",null,{tags:["Private"]}),o.prototype.publish("imgPatternArr",'["../ampatterns/black/pattern2.png"]',"string","Background Pattern Images (Not used if '[]')",null,{inputType:"textarea",tags:["Private"]}),o.prototype.publish("useClonedPalette",!1,"boolean","Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]}),o.prototype.publish("axisMinPeriod","MM","string","Minimum period when parsing dates"),o.prototype.publish("selectionColor","#f00","html-color","Font Color",null,{tags:["Basic"]}),o.prototype.publish("selectionMode","simple","set","Selection Mode",["simple","multi"],{tags:["Intermediate"]}),o.prototype.publish("showCursor",!1,"boolean","Show Chart Scrollbar",null,{tags:["Intermediate","Shared"]}),o.prototype.publish("showFirstLabel",!0,"boolean","Show first label",null,{tags:["Intermediate","Shared"]}),o.prototype.publish("showLastLabel",!0,"boolean","Show last label",null,{tags:["Intermediate","Shared"]}),o.prototype.publish("equalSpacing",!1,"boolean","Show Chart Scrollbar",null,{tags:["Intermediate","Shared"]}),o.prototype.publish("paletteGrouping","By Column","set","Palette Grouping",["By Category","By Column"],{tags:["Basic"]}),o.prototype.publish("y2",[],"array","Columns to associate with second Y-Axis"),o.prototype.publish("axisLineWidth",1,"number","Axis Line Width",null,{tags:["Intermediate","Shared"]}),o.prototype.publish("axisAlpha",1,"number","Axis Alpha",null,{tags:["Intermediate"]}),o.prototype.publish("startOnAxis",!0,"boolean","Draw Chart Starting On Axis.",null,{tags:["Intermediate"]}),o.prototype.publish("xAxisShowAllLabels",!1,"boolean","show All Category Axis Labels",null,{tags:["Intermediate"]}),o.prototype.publish("axisFontSize",null,"number","X/Y Axis Text Font Size",null,{tags:["Basic","Shared"]}),o.prototype.publishProxy("xAxisBaselineColor","_xAxis","axisBaselineColor"),o.prototype.publishProxy("yAxisBaselineColor","_yAxis","axisBaselineColor"),o.prototype.publishProxy("xAxisFontColor","_xAxis","axisFontColor"),o.prototype.publishProxy("yAxisFontColor","_yAxis","axisFontColor"),o.prototype.publishProxy("xAxisTitle","_xAxis","axisTitle"),o.prototype.publishProxy("yAxisTitle","_yAxis","axisTitle"),o.prototype.publishProxy("xAxisTitleFontSize","_xAxis","axisTitleFontSize"),o.prototype.publishProxy("yAxisTitleFontSize","_yAxis","axisTitleFontSize"),o.prototype.publishProxy("xAxisTitleFontColor","_xAxis","axisTitleFontColor"),o.prototype.publishProxy("yAxisTitleFontColor","_yAxis","axisTitleFontColor"),o.prototype.publishProxy("xAxisLabelRotation","_xAxis","axisLabelRotation"),o.prototype.publishProxy("yAxisLabelRotation","_yAxis","axisLabelRotation"),o.prototype.publishProxy("xAxisAutoGridCount","_xAxis","axisAutoGridCount"),o.prototype.publishProxy("yAxisAutoGridCount","_yAxis","axisAutoGridCount"),o.prototype.publishProxy("xAxisGridPosition","_xAxis","axisGridPosition"),o.prototype.publishProxy("xAxisBoldPeriodBeginning","_xAxis","axisBoldPeriodBeginning"),o.prototype.publishProxy("yAxisBoldPeriodBeginning","_yAxis","axisBoldPeriodBeginning"),o.prototype.publishProxy("xAxisDashLength","_xAxis","axisDashLength"),o.prototype.publishProxy("yAxisDashLength","_yAxis","axisDashLength"),o.prototype.publishProxy("xAxisFillAlpha","_xAxis","axisFillAlpha"),o.prototype.publishProxy("yAxisFillAlpha","_yAxis","axisFillAlpha"),o.prototype.publishProxy("xAxisFillColor","_xAxis","axisFillColor"),o.prototype.publishProxy("yAxisFillColor","_yAxis","axisFillColor"),o.prototype.publishProxy("xAxisGridAlpha","_xAxis","axisGridAlpha"),o.prototype.publishProxy("yAxisGridAlpha","_yAxis","axisGridAlpha"),o.prototype.publishProxy("xAxisTypeTimePattern","_xAxis","axisTypeTimePattern"),o.prototype.publishProxy("yAxisTypeTimePattern","_yAxis","axisTypeTimePattern"),o.prototype.publishProxy("xAxisType","_xAxis","axisType"),o.prototype.publishProxy("yAxisType","_yAxis","axisType"),o.prototype.publishProxy("xAxisTickFormat","_xAxis","axisTickFormat"),o.prototype.publishProxy("yAxisTickFormat","_yAxis","axisTickFormat"),o.prototype._origBackwardsCompatible=o.prototype.backwardsCompatible,o.prototype.backwardsCompatible=function(e){var t=o.prototype._origBackwardsCompatible.apply(this,arguments);return arguments.length&&this.switchProperties(e),t},o.prototype.switchProperties=function(e){e===!0?o.prototype.excludeObjs=["amchart_SerialAxis"]:o.prototype.excludeObjs=[]},o.prototype.xAxis=function(e){if(!this.xAxes()[e]){var t=new s;t._owningWidget=this,this.xAxes()[e]=t}return this.xAxes()[e]},o.prototype.yAxis=function(e){if(!this.yAxes()[e]){var t=new s;t._owningWidget=this,this.yAxes()[e]=t}return this.yAxes()[e]},o.prototype.formatData=function(e){switch(this.xAxes()[0].axisType()){case"time":return this.xAxes()[0]._parser(typeof e=="number"?e.toString():e);default:return e}},o.prototype.formatValue=function(e){if(!e)return e;if(e instanceof Array)return e.map(function(e){return this.formatValue(e)},this);switch(this.yAxes()[0].axisType()){case"time":return this.yAxes()[0]._parser(typeof e=="number"?e.toString():e);default:if(typeof e=="string")return+e;return e}},o.prototype.amFormatData=function(e){this._rangeType=null;var t=[],n=this;e.forEach(function(e){var r={};e.forEach(function(e,t){var i=n.columns()[t];if(e instanceof Array){var s=t-1;e.length===2?(r["openField"+s]=n.formatValue(e[0]),r["valueField"+s]=n.formatValue(e[1]),n._rangeType="normal"):(r["lowField"+s]=n.formatValue(e[0]),r["openField"+s]=n.formatValue(e[1]),r["closeField"+s]=n.formatValue(e[2]),r["highField"+s]=n.formatValue(e[3]),n._rangeType="candle-ohlc")}else t===0?r[i]=n.formatData(e):t>=n.columns().length?r[i]=e:r[i]=n.formatValue(e)}),r.__origRow=e,t.push(r)});if(this.xAxisType()==="time"){var r=n.columns()[0];t.sort(function(e,t){return e[r]-t[r]}),this.data(t.map(function(e){var t=e.__origRow;return delete e.__origRow,t}))}return t},o.prototype.updateChartOptions=function(){var t=this;this._chart.type="serial",this._chart.startDuration=this.startDuration(),this._chart.rotate=this.orientation()==="vertical",this._chart.color=this.fontColor(),this._chart.fontSize=this.fontSize(),this._chart.fontFamily=this.fontFamily(),this._chart.categoryAxis={};var r=this.xAxes()[0];this._chart.categoryAxis.position=r.position()?r.position():"bottom",this._chart.categoryAxis.autoGridCount=r.axisAutoGridCount(),this._chart.categoryAxis.gridPosition=r.axisGridPosition(),this._chart.categoryAxis.axisAlpha=r.axisAlpha(),this._chart.categoryAxis.gridAlpha=r.axisGridAlpha(),this._chart.categoryAxis.startOnAxis=r.startOnAxis(),this._chart.categoryAxis.labelRotation=r.axisLabelRotation(),this._chart.categoryAxis.title=r.axisTitle(),this._chart.categoryAxis.axisColor=r.axisBaselineColor(),this._chart.categoryAxis.axisThickness=r.axisLineWidth(),this._chart.categoryAxis.boldPeriodBeginning=r.axisBoldPeriodBeginning(),this._chart.categoryAxis.dashLength=r.axisDashLength(),this._chart.categoryAxis.fillAlpha=r.axisFillAlpha(),this._chart.categoryAxis.fillColor=r.axisFillColor(),this._chart.categoryAxis.fontSize=r.axisFontSize(),this._chart.categoryAxis.color=r.axisFontColor(),this._chart.categoryAxis.titleColor=r.axisTitleFontColor(),this._chart.categoryAxis.titleFontSize=r.axisTitleFontSize(),this._chart.categoryAxis.showFirstLabel=this.showFirstLabel(),this._chart.categoryAxis.showLastLabel=this.showLastLabel(),this._chart.categoryAxis.equalSpacing=this.equalSpacing();switch(r.axisType()){case"time":this._chart.categoryAxis.parseDates=!0,this._chart.categoryAxis.minPeriod=this.axisMinPeriod()?this.axisMinPeriod():undefined,this._chart.categoryAxis.logarithmic=!1,r.axisTickFormat()?this.dataFormatter=e.time.format(r.axisTickFormat()):r.axisTypeTimePattern()?this.dataFormatter=e.time.format(r.axisTypeTimePattern()):this.dataFormatter=function(e){return e};break;case"log":this._chart.categoryAxis.parseDates=!1,this._chart.categoryAxis.logarithmic=!0,this.dataFormatter=r.axisTickFormat()?e.format(r.axisTickFormat()):function(e){return e};break;case"linear":default:this._chart.categoryAxis.parseDates=!1,this._chart.categoryAxis.logarithmic=!1,this.dataFormatter=r.axisTickFormat()?e.format(r.axisTickFormat()):function(e){return e}}this._chart.categoryAxis.labelFunction=function(e,n,i){switch(r.axisType()){case"time":return t.dataFormatter(r.axisTickFormat()||r.axisTypeTimePattern()?new Date(n):n);default:return t.dataFormatter(e)}};for(var i=0;i<this.yAxes().length;i++){var s=this.yAxes()[i];this._chart.valueAxes[i]||this._chart.valueAxes.push(new n.ValueAxis),this._chart.valueAxes[i].id="v"+i,this._chart.valueAxes[i].position=s.position()?s.position():"left",this._chart.valueAxes[i].title=s.axisTitle(),this._chart.valueAxes[i].titleColor=s.axisTitleFontColor(),this._chart.valueAxes[i].titleFontSize=s.axisTitleFontSize(),this._chart.valueAxes[i].axisThickness=s.axisLineWidth(),this._chart.valueAxes[i].color=s.axisFontColor(),this._chart.valueAxes[i].fontSize=s.axisFontSize(),this._chart.valueAxes[i].axisColor=s.axisBaselineColor(),this._chart.valueAxes[i].axisAlpha=s.axisAlpha(),this._chart.valueAxes[i].fillColor=s.axisFillColor(),this._chart.valueAxes[i].fillAlpha=s.axisFillAlpha(),this._chart.valueAxes[i].gridAlpha=s.axisGridAlpha(),this._chart.valueAxes[i].dashLength=s.axisDashLength(),this._chart.valueAxes[i].boldPeriodBeginning=s.axisBoldPeriodBeginning(),this._chart.valueAxes[i].autoGridCount=s.axisAutoGridCount();switch(s.axisType()){case"time":this._chart.valueAxes[i].type="date",this._chart.valueAxes[i].parseDates=!0,this._chart.valueAxes[i].minPeriod=this.axisMinPeriod()?this.axisMinPeriod():undefined,this._chart.valueAxes[i].logarithmic=!1,s.axisTickFormat()?this.valueFormatter=e.time.format(s.axisTickFormat()):s.axisTypeTimePattern()?this.valueFormatter=e.time.format(s.axisTypeTimePattern()):this.valueFormatter=function(e){return e};break;case"log":this._chart.valueAxes[i].parseDates=!1,this._chart.valueAxes[i].logarithmic=!0,this._chart.valueAxes[i].type="numeric",this.valueFormatter=s.axisTickFormat()?e.format(s.axisTickFormat()):function(e){return e};break;case"linear":default:this._chart.valueAxes[i].parseDates=!1,this._chart.valueAxes[i].type="numeric",this._chart.valueAxes[i].logarithmic=!1,this.valueFormatter=s.axisTickFormat()?e.format(s.axisTickFormat()):function(e){return e}}this._chart.valueAxes[i].labelFunction=function(e,n,r){switch(s.axisType()){case"time":return t.valueFormatter(s.axisTickFormat()||s.axisTypeTimePattern()?new Date(n):n);default:return t.valueFormatter(e)}}}this.showScrollbar()?this._chart.chartScrollbar.enabled=!0:this._chart.chartScrollbar.enabled=!1,this.showCursor()?(this._chart.chartCursor.enabled=!0,this._chart.chartCursor.valueLineEnabled=!0,this._chart.chartCursor.valueLineBalloonEnabled=!0,this._chart.chartCursor.categoryBalloonEnabled=!0):(this._chart.chartCursor.enabled=!1,this._chart.chartCursor.valueLineEnabled=!1,this._chart.chartCursor.valueLineBalloonEnabled=!1,this._chart.chartCursor.categoryBalloonEnabled=!1),this._currXAxisTypes=this.xAxes().map(function(e){return e.axisType()}).toString(),this._currYAxisTypes=this.yAxes().map(function(e){return e.axisType()}).toString(),this._currXAxisTypeTimePatterns=this.xAxes().map(function(e){return e.axisTypeTimePattern()}).toString(),this._currYAxisTypeTimePatterns=this.yAxes().map(function(e){return e.axisTypeTimePattern()}).toString();if(this._dataUpdated>this._prevDataUpdated||this._prevYAxisType!==this._currYAxisTypes||this._prevXAxisType!==this._currXAxisTypes||this._prevXAxisTypeTimePattern!==this._currXAxisTypeTimePatterns||this._prevYAxisTypeTimePattern!==this._currYAxisTypeTimePatterns||this.paletteGrouping&&this._prevPaletteGrouping!==this.paletteGrouping()||this._columnsUpdated>this._prevColumnsUpdated)this._chart.dataProvider=this.amFormatData(this.data());this._chart.dataProvider=this.amFormatData(this.data()),this._prevDataUpdated=this._dataUpdated,this._prevColumnsUpdated=this._columnsUpdated,this._prevXAxisTypes=this._currXAxisTypes,this._prevYAxisTypes=this._currYAxisTypes,this._prevXAxisTypeTimePatterns=this._currXAxisTypeTimePatterns,this._prevYAxisTypeTimePatterns=this._currXAxisTypeTimePatterns,this.paletteGrouping&&(this._prevPaletteGrouping=this.paletteGrouping()),this.amFormatColumns(),r.axisAutoGridCount()===!1&&this.xAxisShowAllLabels()&&(this._chart.categoryAxis.gridCount=this._chart.dataProvider.length);var o,u;return this._chart.colors=[],t._class.indexOf("amchart_Area")!==-1&&(u="Area"),this._chart.dataProvider.forEach(function(e,n){t.columns().filter(function(e,t){return t>0}).forEach(function(e,r){t.paletteGrouping()==="By Category"?o=t._palette(n):o=t._palette(e),t._chart.colors.push(o),t._chart.dataProvider[n]["color"+r]=o,u!=="Area"&&(t._chart.dataProvider[n]["linecolor"+r]=t.lineColor()?t.lineColor():o),t._colorObj[n]===undefined&&(t._colorObj[n]={}),t._colorObj[n][r]={color:o,lineColor:t.lineColor()?t.lineColor():o}})}),this._chart},o.prototype.buildGraphObj=function(e,t){var n=this,r={};r.id="g"+t,this.y2().indexOf(t)!==-1?r.valueAxis="v1":r.valueAxis="v0",r.balloonFunction=function(e){return e.graph.type==="line"?e.category+", "+n.columns()[e.graph.index+1]+": "+n.data()[e.index][e.graph.index+1]:e.category+", "+n.columns()[e.graph.columnIndex+1]+": "+n.data()[e.index][e.graph.columnIndex+1]},r.lineAlpha=n.lineOpacity(),r.lineColor=n.lineColor(),r.lineThickness=n.lineWidth(),r.dashLength=n.dashedLineStyle(),r.type=e,r.title="";var i=["value","open","close","high","low"];i.forEach(function(e){typeof n["_"+e+"Field"]!="undefined"&&typeof n["_"+e+"Field"][t]!="undefined"&&(r[e+"Field"]=n["_"+e+"Field"][t])});try{if(n.useImgPatterns()){var s=JSON.parse(n.imgPatternArr());typeof s[t]!="undefined"&&(r.pattern=s[t])}else r.pattern=""}catch(o){console.log("e:"),console.log(o)}return r.colorField="color"+t,r.lineColorField="linecolor"+t,r.fillColorsField="fillcolor"+t,r},o.prototype.amFormatColumns=function(e){return this._categoryField=this.columns()[0],this._chart.categoryField=this.columns()[0],this._openField=[],this._closeField=[],this._valueField=this.columns().slice(1),this},o.prototype.enter=function(e,i){t.prototype.enter.apply(this,arguments),this.xAxes().length===0&&this.xAxes().push(this._xAxis),this.yAxes().length===0&&this.yAxes().push(this._yAxis);if(this.y2().length&&this.yAxes().length===1){var o=new s;o.owningWidget=this,this.yAxes().push(o)}var u=this,a={type:"serial",addClassNames:!0,chartScrollbar:{},chartCursor:{enabled:!1,valueLineEnabled:!1,valueLineBalloonEnabled:!1,categoryBalloonEnabled:!1,cursorAlpha:0,valueLineAlpha:.2,oneBalloonOnly:!0,balloonPointerOrientation:"vertical",valueBalloonsEnabled:!1}};typeof define=="function"&&define.amd&&(a.pathToImages=r.toUrl("amchartsImg")),this._chart=n.makeChart(e,a),this._chart.addListener("clickGraphItem",function(e){var t=e.graph,n=e.item.dataContext,r,i;u._gType==="column"?(r=t.fillColorsField,i=t.lineColorField):u._gType==="line"?r=t.colorField:u._gType==="area"&&(r=t.colorField),r&&(n[r]!==null&&n[r]!==undefined?(delete n[r],n[i]=u._colorObj[e.index][e.target.columnIndex].lineColor,u.selectionMode()==="simple"&&(u._selected!==null&&(delete u._selected.data[u._selected.field],u._selected.data[u._selected.field2]=u._colorObj[u._selected.dIdx][u._selected.cIdx].lineColor),u._selected=null)):(n[r]=u.selectionColor(),n[i]=u.selectionColor(),u.selectionMode()==="simple"&&(u._selected!==null&&(delete u._selected.data[u._selected.field],u._selected.data[u._selected.field2]=u._colorObj[u._selected.dIdx][u._selected.cIdx].lineColor),u._selected={field:r,field2:i,data:n,dIdx:e.index,cIdx:e.target.columnIndex},u._selections.push(u._selected))),e.chart.validateData()),u.click(u.rowToObj(u.data()[e.index]),u.columns()[e.target.columnIndex+1],u._selected!==null)})},o.prototype.update=function(e,n){t.prototype.update.apply(this,arguments);var r=this;this.yAxes().forEach(function(e,t){t===0&&(r._yAxis=e),e._owningWidget=r}),this.xAxes().forEach(function(e,t){t===0&&(r._xAxis=e),e._owningWidget=r}),this.backwardsCompatible()?this.switchProperties(!0):this.switchProperties(!1),e.style.width=this.size().width+"px",e.style.height=this.size().height+"px",this._palette=this._palette.switch(this.paletteID()),this.useClonedPalette()&&(this._palette=this._palette.cloneNotExists(this.paletteID()+"_"+this.id()))},o.prototype.render=function(e){return t.prototype.render.apply(this,arguments)},o.prototype.data=function(e){return arguments.length&&this._dataUpdated++,t.prototype.data.apply(this,arguments)},o.prototype.columns=function(e){return arguments.length&&this._columnsUpdated++,t.prototype.columns.apply(this,arguments)},o});