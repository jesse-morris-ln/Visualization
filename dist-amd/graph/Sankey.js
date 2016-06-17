!function(t,e){"function"==typeof define&&define.amd?define(["d3","../common/SVGWidget","../common/Palette","../common/PropertyExt","d3-sankey","css!./Sankey"],e):t.graph_Sankey=e(t.d3,t.common_SVGWidget,t.common_Palette,t.common_PropertyExt,t.d3.sankey)}(this,function(t,e,n,r,o){function a(t){r.call(this),this._owner=t}function i(t){e.call(this),this._drawStartPos="origin"}return o=o||t.sankey||window.d3.sankey,a.prototype=Object.create(r.prototype),a.prototype.constructor=a,a.prototype._class+=" graph_Sankey.Column",a.prototype.publish("column",null,"set","Field",function(){return this._owner?this._owner.columns():[]},{optional:!0}),a.prototype.publish("aggrType",null,"set","Aggregation Type",[null,"mean","median","sum","min","max"],{optional:!0,disable:function(t){return!t._owner||0===t._owner.mappings().indexOf(t)}}),a.prototype.publish("aggrColumn",null,"set","Aggregation Field",function(){return this._owner?this._owner.columns():[]},{optional:!0,disable:function(t){return!t._owner||!t.aggrType()||0===t._owner.mappings().indexOf(t)}}),a.prototype.aggregate=function(e){switch(this.aggrType()){case null:case void 0:case"":return e.length;default:var n=this._owner.columns(),r=n.indexOf(this.aggrColumn());return t[this.aggrType()](e,function(t){return+t[r]})}},i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.prototype._class+=" graph_Sankey",i.prototype.Column=a,i.prototype._palette=n.ordinal("default"),i.prototype.publish("paletteID","default","set","Palette ID",i.prototype._palette["switch"]()),i.prototype.publish("mappings",[],"propertyArray","Source Columns",null,{autoExpand:a}),i.prototype.publish("vertexWidth",36,"number","Vertex Width"),i.prototype.publish("vertexPadding",40,"number","Vertex Padding"),i.prototype.publish("xAxisMovement",!1,"boolean","Enable x-axis movement"),i.prototype.publish("yAxisMovement",!1,"boolean","Enable y-axis movement"),i.prototype.sankeyData=function(){var t={},e={vertices:[],edges:[]},n=this.mappings().filter(function(t){return t.column()});return n.forEach(function(n,r){var o=this._db.rollupView([n.column()]);o.entries().forEach(function(o){var a=n.column()+":"+r+":"+o.key;t[a]||(e.vertices.push({__id:a,__category:n.column(),name:o.key,origRow:o}),t[a]=e.vertices.length-1)},this)},this),n.forEach(function(r,o){if(o<n.length-1){var a=n[o+1],i=this._db.rollupView([r.column(),a.column()]);i.entries().forEach(function(n){var i=r.column()+":"+o+":"+n.key;n.values.forEach(function(n){var r=a.column()+":"+(o+1)+":"+n.key;e.edges.push({__id:i+"_"+r,source:t[i],target:t[r],value:a.aggregate(n.values)})})})}},this),e},i.prototype.enter=function(t,n){e.prototype.enter.apply(this,arguments),this._d3Sankey=new o,this._d3SankeyPath=this._d3Sankey.link()},i.prototype.update=function(n,r){function o(e){var n=t.select(this);i.xAxisMovement()&&(e.x=Math.max(0,Math.min(i.width()-e.dx,t.event.x))),i.yAxisMovement()&&(e.y=Math.max(0,Math.min(i.height()-e.dy,t.event.y))),n.attr("transform","translate("+e.x+","+e.y+")"),i._d3Sankey.relayout(),s.attr("d",i._d3SankeyPath),n.select("text").attr("x",-6).attr("y",function(t){return t.dy/2}).attr("dy",".35em").attr("text-anchor","end").attr("transform",null).text(function(t){return t.name}).filter(function(t){return t.x<i.width()/2}).attr("x",6+i._d3Sankey.nodeWidth()).attr("text-anchor","start")}e.prototype.update.apply(this,arguments),this._palette=this._palette["switch"](this.paletteID());var a=this.sankeyData();this._d3Sankey.size([this.width(),this.height()]).nodeWidth(this.vertexWidth()).nodePadding(this.vertexPadding()).nodes(a.vertices).links(a.edges).layout(32);var i=this,s=r.selectAll(".link").data(a.edges);s.enter().append("path").attr("class","link").append("title"),s.attr("d",this._d3SankeyPath).style("stroke-width",function(t){return Math.max(1,t.dy)}).sort(function(t,e){return e.dy-t.dy}),s.select("title").text(function(t){return t.source.name+" → "+t.target.name+"\n"+t.value}),s.exit().remove();var l=r.selectAll(".node").data(a.vertices);l.enter().append("g").attr("class","node").each(function(e){var n=t.select(this);n.append("rect"),n.append("text")}).on("click.mouse",function(t,e){i.click(t.origRow,"",!0)}).call(t.behavior.drag().origin(function(t){return t}).on("dragstart",function(){this.parentNode.appendChild(this)}).on("drag",o)),l.attr("transform",function(t){return"translate("+t.x+","+t.y+")"}),l.select("rect").attr("height",function(t){return t.dy}).attr("width",this._d3Sankey.nodeWidth()).style("fill",function(t){return i._palette(t.name)}).style("stroke",function(e){return t.rgb(i._palette(e.name)).darker(2)}).style("cursor",this.xAxisMovement()||this.yAxisMovement()?null:"default"),l.select("text").attr("x",-6).attr("y",function(t){return t.dy/2}).attr("dy",".35em").attr("text-anchor","end").attr("transform",null).text(function(t){return t.name}).filter(function(t){return t.x<i.width()/2}).attr("x",6+this._d3Sankey.nodeWidth()).attr("text-anchor","start"),l.exit().remove()},i.prototype.exit=function(t,n){e.prototype.exit.apply(this,arguments)},i.prototype.click=function(t,e,n){console.log(t+", "+e+", "+n)},i});