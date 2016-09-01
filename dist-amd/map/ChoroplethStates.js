!function(t,o){"function"==typeof define&&define.amd?define(["d3","topojson","./Choropleth","./us-states"],o):t.map_ChoroplethStates=o(t.d3,t.topojson,t.map_Choropleth,t.map_usStates)}(this,function(t,o,e,a){function s(){e.call(this),this.projection("albersUsaPr"),this._choroTopology=a.topology,this._choroTopologyObjects=a.topology.objects.states}var i=o.feature(a.topology,a.topology.objects.states).features,r={};for(var n in i)i[n].id&&(r[a.stateNames[i[n].id].code]=i[n]);return s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.prototype._class+=" map_ChoroplethStates",s.prototype.layerEnter=function(o,s,i){e.prototype.layerEnter.apply(this,arguments),this._selection.widgetElement(this._choroplethData),this.choroPaths=t.select(null);var n=this;this.tooltipHTML(function(t){var o=r[t[0]].id;return n.tooltipFormat({label:a.stateNames[o].name,value:t[1]})})},s.prototype.layerUpdate=function(t){e.prototype.layerUpdate.apply(this,arguments),this.choroPaths=this._choroplethData.selectAll(".data").data(this.visible()?this.data():[],function(t){return t[0]});var o=this;this.choroPaths.enter().append("path").attr("class","data").call(this._selection.enter.bind(this._selection)).on("click",function(t){o.click(o.rowToObj(t),"weight",o._selection.selected(this))}).on("mouseout.tooltip",this.tooltip.hide).on("mousemove.tooltip",this.tooltip.show),this.choroPaths.attr("d",function(o){var e=t._d3GeoPath(r[o[0]]);return e||console.log("Unknown US State:  "+o),e}).style("fill",function(t){var e=o._palette(t[1],o._dataMinWeight,o._dataMaxWeight);return e}),this.choroPaths.exit().remove()},s});