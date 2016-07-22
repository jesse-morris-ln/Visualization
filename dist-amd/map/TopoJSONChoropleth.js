(function(e,t){typeof define=="function"&&define.amd?define(["d3","topojson","./Choropleth","require"],t):e.map_TopoJSONChoropleth=t(e.d3,e.topojson,e.map_Choropleth,e.require)})(this,function(e,t,n,r){function i(){n.call(this),this.projection("mercator")}return i.prototype=Object.create(n.prototype),i.prototype.constructor=i,i.prototype._class+=" map_TopoJSONChoropleth",i.prototype.publish("region","GB","set","Region Data",["AT","BE","BG","CHLI","CY","CZ","DE","DK","EE","ES","FI","FR","GB","GE","GR","HR","HU","IE","IS","IT","KS","LT","LU","LV","MD","MK","MT","ND","NL","NO","PL","PT","RO","RS","SE","SI","SK","UA"]),i.prototype.layerEnter=function(t,r,i){n.prototype.layerEnter.apply(this,arguments),this._selection.widgetElement(this._choroplethData),this.choroPaths=e.select(null)},i.prototype.layerUpdate=function(e){var i=this;return(new Promise(function(s,o){i._prevRegion!==i.region()?(i._prevRegion=i.region(),r(["json!src/map/TopoJSON/"+i.region()+".json"],function(o){function u(t){i._choroTopologyIndex=t,n.prototype.layerUpdate.call(i,e,!0),s()}i._choroTopology=o,i._choroTopologyObjects=o.objects.PolbndA,i._choroTopologyFeatures=t.feature(i._choroTopology,i._choroTopologyObjects).features,r(["json!src/map/TopoJSON/"+i.region()+"_idx.json"],u,function(e){u({})})})):(n.prototype.layerUpdate.call(i,e),s())})).then(function(){var t=[];i.data().forEach(function(e){if(isNaN(e[0]))for(var n in i._choroTopologyIndex)for(var r in i._choroTopologyIndex[n])r===e[0]&&i._choroTopologyIndex[n][r].forEach(function(n){t.push([n].concat(e.filter(function(e,t){return t>0})))});else t.push(e)}),i.choroPaths=i._choroplethData.selectAll(".data").data(i.visible()?t:[],function(e){return e[0]}),i.choroPaths.enter().append("path").attr("class","data").call(i._selection.enter.bind(i._selection)).on("click",function(e){i._dataMap[e[0]]&&i.click(i.rowToObj(i._dataMap[e[0]]),"weight",i._selection.selected(i))}).on("mouseover.tooltip",function(e){i.tooltipShow([e[0],e[1]],i.columns(),1)}).on("mouseout.tooltip",function(e){i.tooltipShow()}).on("mousemove.tooltip",function(e){i.tooltipShow([e[0],e[1]],i.columns(),1)}),i.choroPaths.attr("d",function(t){var n=e._d3GeoPath(i._choroTopologyFeatures[t[0]]);return n||console.log("Unknown Country:  "+t),n}).style("fill",function(e){var t=i._palette(e[1],i._dataMinWeight,i._dataMaxWeight);return t}),i.choroPaths.exit().remove()})},i});