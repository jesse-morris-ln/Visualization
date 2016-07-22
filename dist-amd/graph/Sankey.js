(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/SVGWidget","../common/Palette","../common/PropertyExt","../common/Utility","d3-sankey","css!./Sankey"],t):e.graph_Sankey=t(e.d3,e.common_SVGWidget,e.common_Palette,e.common_PropertyExt,e.common_Utility,e.d3.sankey)})(this,function(e,t,n,r,i,s){function o(e){r.call(this),this._owner=e}function u(e){t.call(this),i.SimpleSelectionMixin.call(this),this._drawStartPos="origin"}return s=s||e.sankey||window.d3.sankey,o.prototype=Object.create(r.prototype),o.prototype.constructor=o,o.prototype._class+=" graph_Sankey.Column",o.prototype.publish("column",null,"set","Field",function(){return this._owner?this._owner.columns():[]},{optional:!0}),o.prototype.publish("aggrType",null,"set","Aggregation Type",[null,"mean","median","sum","min","max"],{optional:!0,disable:function(e){return!e._owner||e._owner.mappings().indexOf(e)===0}}),o.prototype.publish("aggrColumn",null,"set","Aggregation Field",function(){return this._owner?this._owner.columns():[]},{optional:!0,disable:function(e){return!e._owner||!e.aggrType()||e._owner.mappings().indexOf(e)===0}}),o.prototype.aggregate=function(t){switch(this.aggrType()){case null:case undefined:case"":return t.length;default:var n=this._owner.columns(),r=n.indexOf(this.aggrColumn());return e[this.aggrType()](t,function(e){return+e[r]})}},u.prototype=Object.create(t.prototype),u.prototype.constructor=u,u.prototype._class+=" graph_Sankey",u.prototype.Column=o,u.prototype.mixin(i.SimpleSelectionMixin),u.prototype._palette=n.ordinal("default"),u.prototype.publish("paletteID","default","set","Palette ID",u.prototype._palette.switch()),u.prototype.publish("mappings",[],"propertyArray","Source Columns",null,{autoExpand:o}),u.prototype.publish("vertexWidth",36,"number","Vertex Width"),u.prototype.publish("vertexPadding",40,"number","Vertex Padding"),u.prototype.publish("xAxisMovement",!1,"boolean","Enable x-axis movement"),u.prototype.publish("yAxisMovement",!1,"boolean","Enable y-axis movement"),u.prototype.sankeyData=function(){var e={},t={vertices:[],edges:[]},n=this.mappings().filter(function(e){return e.column()});return n.forEach(function(n,r){var i=this._db.rollupView([n.column()]);i.entries().forEach(function(i){var s=n.column()+":"+r+":"+i.key;e[s]||(t.vertices.push({__id:s,__category:n.column(),name:i.key,origRow:i.values}),e[s]=t.vertices.length-1)},this)},this),n.forEach(function(r,i){if(i<n.length-1){var s=n[i+1],o=this._db.rollupView([r.column(),s.column()]);o.entries().forEach(function(n){var o=r.column()+":"+i+":"+n.key;n.values.forEach(function(n){var r=s.column()+":"+(i+1)+":"+n.key;t.edges.push({__id:o+"_"+r,source:e[o],target:e[r],value:s.aggregate(n.values)})})})}},this),t},u.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments),this._d3Sankey=new s,this._d3SankeyPath=this._d3Sankey.link(),this._selection.widgetElement(n)},u.prototype.update=function(n,r){t.prototype.update.apply(this,arguments),this._palette=this._palette.switch(this.paletteID());var i=this.sankeyData();this._d3Sankey.size([this.width(),this.height()]).nodeWidth(this.vertexWidth()).nodePadding(this.vertexPadding()).nodes(i.vertices).links(i.edges).layout(32);var s=this,o=r.selectAll(".link").data(i.edges);o.enter().append("path").attr("class","link").append("title"),o.attr("d",this._d3SankeyPath).style("stroke-width",function(e){return Math.max(1,e.dy)}).sort(function(e,t){return t.dy-e.dy}),o.select("title").text(function(e){return e.source.name+" → "+e.target.name+"\n"+e.value}),o.exit().remove();var u=r.selectAll(".node").data(i.vertices);u.enter().append("g").attr("class","node").call(this._selection.enter.bind(this._selection)).on("click",function(e,t){s.click(s.rowToObj(e.origRow[0]),"",s._selection.selected(this))}).each(function(t){var n=e.select(this);n.append("rect"),n.append("text")}),u.attr("transform",function(e){return"translate("+e.x+","+e.y+")"}),u.select("rect").attr("height",function(e){return e.dy}).attr("width",this._d3Sankey.nodeWidth()).style("fill",function(e){return s._palette(e.name)}).style("cursor",this.xAxisMovement()||this.yAxisMovement()?null:"default"),u.select("text").attr("x",-6).attr("y",function(e){return e.dy/2}).attr("dy",".35em").attr("text-anchor","end").attr("transform",null).text(function(e){return e.name}).filter(function(e){return e.x<s.width()/2}).attr("x",6+this._d3Sankey.nodeWidth()).attr("text-anchor","start"),u.exit().remove()},u.prototype.exit=function(e,n){t.prototype.exit.apply(this,arguments)},u.prototype.click=function(e,t,n){console.log("Click:  "+JSON.stringify(e)+", "+t+","+n)},u});