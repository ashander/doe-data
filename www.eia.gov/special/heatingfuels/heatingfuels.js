/**
 * Created by MEL on 9/25/14.
 */

/*

 JS Signals <http://millermedeiros.github.com/js-signals/>
 Released under the MIT license
 Author: Miller Medeiros
 Version: 1.0.0 - Build: 268 (2012/11/29 05:48 PM)
 */
(function(i){function h(a,b,c,d,e){this._listener=b;this._isOnce=c;this.context=d;this._signal=a;this._priority=e||0}function g(a,b){if(typeof a!=="function")throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}",b));}function e(){this._bindings=[];this._prevParams=null;var a=this;this.dispatch=function(){e.prototype.dispatch.apply(a,arguments)}}h.prototype={active:!0,params:null,execute:function(a){var b;this.active&&this._listener&&(a=this.params?this.params.concat(a):
    a,b=this._listener.apply(this.context,a),this._isOnce&&this.detach());return b},detach:function(){return this.isBound()?this._signal.remove(this._listener,this.context):null},isBound:function(){return!!this._signal&&!!this._listener},isOnce:function(){return this._isOnce},getListener:function(){return this._listener},getSignal:function(){return this._signal},_destroy:function(){delete this._signal;delete this._listener;delete this.context},toString:function(){return"[SignalBinding isOnce:"+this._isOnce+
    ", isBound:"+this.isBound()+", active:"+this.active+"]"}};e.prototype={VERSION:"1.0.0",memorize:!1,_shouldPropagate:!0,active:!0,_registerListener:function(a,b,c,d){var e=this._indexOfListener(a,c);if(e!==-1){if(a=this._bindings[e],a.isOnce()!==b)throw Error("You cannot add"+(b?"":"Once")+"() then add"+(!b?"":"Once")+"() the same listener without removing the relationship first.");}else a=new h(this,a,b,c,d),this._addBinding(a);this.memorize&&this._prevParams&&a.execute(this._prevParams);return a},
    _addBinding:function(a){var b=this._bindings.length;do--b;while(this._bindings[b]&&a._priority<=this._bindings[b]._priority);this._bindings.splice(b+1,0,a)},_indexOfListener:function(a,b){for(var c=this._bindings.length,d;c--;)if(d=this._bindings[c],d._listener===a&&d.context===b)return c;return-1},has:function(a,b){return this._indexOfListener(a,b)!==-1},add:function(a,b,c){g(a,"add");return this._registerListener(a,!1,b,c)},addOnce:function(a,b,c){g(a,"addOnce");return this._registerListener(a,
        !0,b,c)},remove:function(a,b){g(a,"remove");var c=this._indexOfListener(a,b);c!==-1&&(this._bindings[c]._destroy(),this._bindings.splice(c,1));return a},removeAll:function(){for(var a=this._bindings.length;a--;)this._bindings[a]._destroy();this._bindings.length=0},getNumListeners:function(){return this._bindings.length},halt:function(){this._shouldPropagate=!1},dispatch:function(a){if(this.active){var b=Array.prototype.slice.call(arguments),c=this._bindings.length,d;if(this.memorize)this._prevParams=
        b;if(c){d=this._bindings.slice();this._shouldPropagate=!0;do c--;while(d[c]&&this._shouldPropagate&&d[c].execute(b)!==!1)}}},forget:function(){this._prevParams=null},dispose:function(){this.removeAll();delete this._bindings;delete this._prevParams},toString:function(){return"[Signal active:"+this.active+" numListeners:"+this.getNumListeners()+"]"}};var f=e;f.Signal=e;typeof define==="function"&&define.amd?define(function(){return f}):typeof module!=="undefined"&&module.exports?module.exports=f:i.signals=
    f})(this);


/*!
 * Hasher <http://github.com/millermedeiros/hasher>
 * @author Miller Medeiros
 * @version 1.2.0 (2013/11/11 03:18 PM)
 * Released under the MIT License
 */
(function(){var a=function(b){var c=(function(k){var p=25,r=k.document,n=k.history,x=b.Signal,f,v,m,F,d,D,t=/#(.*)$/,j=/(\?.*)|(\#.*)/,g=/^\#/,i=(!+"\v1"),B=("onhashchange" in k)&&r.documentMode!==7,e=i&&!B,s=(location.protocol==="file:");function o(G){return String(G||"").replace(/\W/g,"\\$&")}function u(H){if(!H){return""}var G=new RegExp("^"+o(f.prependHash)+"|"+o(f.appendHash)+"$","g");return H.replace(G,"")}function E(){var G=t.exec(f.getURL());var I=(G&&G[1])||"";try{return f.raw?I:decodeURIComponent(I)}catch(H){return I}}function A(){return(d)?d.contentWindow.frameHash:null}function z(){d=r.createElement("iframe");d.src="about:blank";d.style.display="none";r.body.appendChild(d)}function h(){if(d&&v!==A()){var G=d.contentWindow.document;G.open();G.write("<html><head><title>"+r.title+'</title><script type="text/javascript">var frameHash="'+v+'";<\/script></head><body>&nbsp;</body></html>');G.close()}}function l(G,H){if(v!==G){var I=v;v=G;if(e){if(!H){h()}else{d.contentWindow.frameHash=G}}f.changed.dispatch(u(G),u(I))}}if(e){D=function(){var H=E(),G=A();if(G!==v&&G!==H){f.setHash(u(G))}else{if(H!==v){l(H)}}}}else{D=function(){var G=E();if(G!==v){l(G)}}}function C(I,G,H){if(I.addEventListener){I.addEventListener(G,H,false)}else{if(I.attachEvent){I.attachEvent("on"+G,H)}}}function y(I,G,H){if(I.removeEventListener){I.removeEventListener(G,H,false)}else{if(I.detachEvent){I.detachEvent("on"+G,H)}}}function q(H){H=Array.prototype.slice.call(arguments);var G=H.join(f.separator);G=G?f.prependHash+G.replace(g,"")+f.appendHash:G;return G}function w(G){G=encodeURI(G);if(i&&s){G=G.replace(/\?/,"%3F")}return G}f={VERSION:"1.2.0",raw:false,appendHash:"",prependHash:"/",separator:"/",changed:new x(),stopped:new x(),initialized:new x(),init:function(){if(F){return}v=E();if(B){C(k,"hashchange",D)}else{if(e){if(!d){z()}h()}m=setInterval(D,p)}F=true;f.initialized.dispatch(u(v))},stop:function(){if(!F){return}if(B){y(k,"hashchange",D)}else{clearInterval(m);m=null}F=false;f.stopped.dispatch(u(v))},isActive:function(){return F},getURL:function(){return k.location.href},getBaseURL:function(){return f.getURL().replace(j,"")},setHash:function(G){G=q.apply(null,arguments);if(G!==v){l(G);if(G===v){if(!f.raw){G=w(G)}k.location.hash="#"+G}}},replaceHash:function(G){G=q.apply(null,arguments);if(G!==v){l(G,true);if(G===v){if(!f.raw){G=w(G)}k.location.replace("#"+G)}}},getHash:function(){return u(v)},getHashAsArray:function(){return f.getHash().split(f.separator)},dispose:function(){f.stop();f.initialized.dispose();f.stopped.dispose();f.changed.dispose();d=f=k.hasher=null},toString:function(){return'[hasher version="'+f.VERSION+'" hash="'+f.getHash()+'"]'}};f.initialized.memorize=true;return f}(window));return c};if(typeof define==="function"&&define.amd){define(["signals"],a)}else{if(typeof exports==="object"){module.exports=a(require("signals"))}else{window.hasher=a(window.signals)}}}());



var config = {
    propane: {
        storage: {
			"frequency": "W",
			"date_offset":-260,
			"sourcekeys" : {
				"US": "PET.WPRSTUS1.W",
				"US-AK": "PET.WPRST_R4N5_1.W",
				"US-AL": "PET.WPRSTP31.W",
				"US-AR": "PET.WPRSTP31.W",
				"US-AZ": "PET.WPRST_R4N5_1.W",
				"US-CA": "PET.WPRST_R4N5_1.W",
				"US-CO": "PET.WPRST_R4N5_1.W",
				"US-CT": "PET.WPRSTP11.W,PET.WPRST1A1.W",
				"US-DC": "PET.WPRSTP11.W",
				"US-DE": "PET.WPRSTP11.W,PET.WPRST1B1.W",
				"US-FL": "PET.WPRSTP11.W,PET.WPRST1C1.W",
				"US-GA": "PET.WPRSTP11.W,PET.WPRST1C1.W",
				"US-HI": "PET.WPRST_R4N5_1.W",
				"US-IA": "PET.WPRSTP21.W",
				"US-ID": "PET.WPRST_R4N5_1.W",
				"US-IL": "PET.WPRSTP21.W",
				"US-IN": "PET.WPRSTP21.W",
				"US-KS": "PET.WPRSTP21.W",
				"US-KY": "PET.WPRSTP21.W",
				"US-LA": "PET.WPRSTP31.W",
				"US-MA": "PET.WPRSTP11.W,PET.WPRST1A1.W",
				"US-MD": "PET.WPRSTP11.W,PET.WPRST1B1.W",
				"US-ME": "PET.WPRSTP11.W,PET.WPRST1A1.W",
				"US-MI": "PET.WPRSTP21.W",
				"US-MN": "PET.WPRSTP21.W",
				"US-MO": "PET.WPRSTP21.W",
				"US-MS": "PET.WPRSTP31.W",
				"US-MT": "PET.WPRST_R4N5_1.W",
				"US-NC": "PET.WPRSTP11.W,PET.WPRST1C1.W",
				"US-ND": "PET.WPRSTP21.W",
				"US-NE": "PET.WPRSTP21.W",
				"US-NH": "PET.WPRSTP11.W,PET.WPRST1A1.W",
				"US-NJ": "PET.WPRSTP11.W,PET.WPRST1B1.W",
				"US-NM": "PET.WPRSTP31.W",
				"US-NV": "PET.WPRST_R4N5_1.W",
				"US-NY": "PET.WPRSTP11.W,PET.WPRST1B1.W",
				"US-OH": "PET.WPRSTP21.W",
				"US-OK": "PET.WPRSTP21.W",
				"US-OR": "PET.WPRST_R4N5_1.W",
				"US-PA": "PET.WPRSTP11.W,PET.WPRST1B1.W",
				"US-RI": "PET.WPRSTP11.W,PET.WPRST1A1.W",
				"US-SC": "PET.WPRSTP11.W,PET.WPRST1C1.W",
				"US-SD": "PET.WPRSTP21.W",
				"US-TN": "PET.WPRSTP21.W",
				"US-TX": "PET.WPRSTP31.W",
				"US-UT": "PET.WPRST_R4N5_1.W",
				"US-VA": "PET.WPRSTP11.W,PET.WPRST1C1.W",
				"US-VT": "PET.WPRSTP11.W,PET.WPRST1A1.W",
				"US-WA": "PET.WPRST_R4N5_1.W",
				"US-WI": "PET.WPRSTP21.W",
				"US-WV": "PET.WPRSTP11.W,PET.WPRST1C1.W",
				"US-WY": "PET.WPRST_R4N5_1.W"
			}
        },
        prices: {
			"frequency": "W",
			"date_offset":-260,
			"credits" : {
				text : 'Sources: U.S. Energy Information Administration, Oil Price Information Service'
			},
			/*"captions" : {
				items : [{
					"text" : "Data Source: Oil Price Information Service"
				}]
			},*/
			"sourcekeys" : {
				"US": "PET.W_EPLLPA_PWR_NUS_DPG.W,PET.W_EPLLPA_PRS_NUS_DPG.W",
				"US-AK": "",
				"US-AL": "PET.W_EPLLPA_PWR_SAL_DPG.W,PET.W_EPLLPA_PRS_SAL_DPG.W,PET.W_EPLLPA_PWR_R30_DPG.W,PET.W_EPLLPA_PRS_R30_DPG.W",
				"US-AR": "PET.W_EPLLPA_PWR_SAR_DPG.W,PET.W_EPLLPA_PRS_SAR_DPG.W,PET.W_EPLLPA_PWR_R30_DPG.W,PET.W_EPLLPA_PRS_R30_DPG.W",
				"US-AZ": "",
				"US-CA": "",
				"US-CO": "PET.W_EPLLPA_PWR_SCO_DPG.W,PET.W_EPLLPA_PRS_SCO_DPG.W,PET.W_EPLLPA_PWR_R40_DPG.W,PET.W_EPLLPA_PRS_R40_DPG.W",
				"US-CT": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1X_DPG.W,PET.W_EPLLPA_PRS_SCT_DPG.W",
				"US-DC": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W",
				"US-DE": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PWR_R1Y_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1Y_DPG.W,PET.W_EPLLPA_PRS_SDE_DPG.W",
				"US-FLX": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PWR_R1Z_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1Z_DPG.W",
				"US-FL": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PWR_R1Z_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1Z_DPG.W,PET.W_EPLLPA_PRS_SFL_DPG.W",
				"US-GA": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PWR_R1Z_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1Z_DPG.W,PET.W_EPLLPA_PWR_SGA_DPG.W,PET.W_EPLLPA_PRS_SGA_DPG.W",
				"US-HI": "",
				"US-IA": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PWR_SIA_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PRS_SIA_DPG.W",
				"US-ID": "PET.W_EPLLPA_PRS_SID_DPG.W,PET.W_EPLLPA_PWR_R40_DPG.W,PET.W_EPLLPA_PRS_R40_DPG.W",
				"US-IL": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PWR_SIL_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PRS_SIL_DPG.W",
				"US-IN": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PWR_SIN_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PRS_SIN_DPG.W",
				"US-KS": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PWR_SKS_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PRS_SKS_DPG.W",
				"US-KY": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PWR_SKY_DPG.W,PET.W_EPLLPA_PRS_SKY_DPG.W",
				"US-LA": "PET.W_EPLLPA_PWR_R30_DPG.W",
				"US-MA": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1X_DPG.W,PET.W_EPLLPA_PRS_SMA_DPG.W",
				"US-MD": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PWR_R1Y_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1Y_DPG.W,PET.W_EPLLPA_PRS_SMD_DPG.W,PET.W_EPLLPA_PWR_SMD_DPG.W",
				"US-ME": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1X_DPG.W,PET.W_EPLLPA_PRS_SME_DPG.W",
				"US-MI": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PWR_SMI_DPG.W,PET.W_EPLLPA_PRS_SMI_DPG.W",
				"US-MN": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PWR_SMN_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PRS_SMN_DPG.W",
				"US-MO": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PWR_SMO_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PRS_SMO_DPG.W",
				"US-MS": "PET.W_EPLLPA_PWR_SMS_DPG.W,PET.W_EPLLPA_PRS_SMS_DPG.W,PET.W_EPLLPA_PWR_R30_DPG.W,PET.W_EPLLPA_PRS_R30_DPG.W",
				"US-MT": "PET.W_EPLLPA_PRS_SMT_DPG.W,PET.W_EPLLPA_PWR_R40_DPG.W,PET.W_EPLLPA_PRS_R40_DPG.W",
				"US-NC": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PWR_R1Z_DPG.W,PET.W_EPLLPA_PWR_SNC_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1Z_DPG.W,PET.W_EPLLPA_PRS_SNC_DPG.W",
				"US-ND": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PWR_SND_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PRS_SND_DPG.W",
				"US-NE": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PWR_SNE_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PRS_SNE_DPG.W",
				"US-NH": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1X_DPG.W,PET.W_EPLLPA_PRS_SNH_DPG.W",
				"US-NJ": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PWR_R1Y_DPG.W,PET.W_EPLLPA_PWR_SNJ_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1Y_DPG.W,PET.W_EPLLPA_PRS_SNJ_DPG.W",
				"US-NM": "PET.W_EPLLPA_PWR_R30_DPG.W",
				"US-NV": "",
				"US-NY": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PWR_R1Y_DPG.W,PET.W_EPLLPA_PWR_SNY_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1Y_DPG.W,PET.W_EPLLPA_PRS_SNY_DPG.W",
				"US-OH": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PWR_SOH_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PRS_SOH_DPG.W",
				"US-OK": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PWR_SOK_DPG.W,PET.W_EPLLPA_PRS_SOK_DPG.W",
				"US-OR": "",
				"US-PA": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PWR_R1Y_DPG.W,PET.W_EPLLPA_PWR_SPA_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1Y_DPG.W,PET.W_EPLLPA_PRS_SPA_DPG.W",
				"US-RI": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1X_DPG.W,PET.W_EPLLPA_PRS_SRI_DPG.W",
				"US-SC": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PWR_R1Z_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1Z_DPG.W",
				"US-SD": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PWR_SSD_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PRS_SSD_DPG.W",
				"US-TN": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PRS_STN_DPG.W",
				"US-TX": "PET.W_EPLLPA_PWR_STX_DPG.W,PET.W_EPLLPA_PRS_STX_DPG.W,PET.W_EPLLPA_PWR_R30_DPG.W,PET.W_EPLLPA_PRS_R30_DPG.W",
				"US-UT": "PET.W_EPLLPA_PRS_SUT_DPG.W,PET.W_EPLLPA_PWR_R40_DPG.W,PET.W_EPLLPA_PRS_R40_DPG.W",
				"US-VA": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PWR_R1Z_DPG.W,PET.W_EPLLPA_PWR_SVA_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PRS_R1Z_DPG.W,PET.W_EPLLPA_PRS_SVA_DPG.W",
				"US-VT": "PET.W_EPLLPA_PRS_SVT_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W,PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PRS_R1X_DPG.W",
				"US-WA": "",
				"US-WI": "PET.W_EPLLPA_PWR_R20_DPG.W,PET.W_EPLLPA_PWR_SWI_DPG.W,PET.W_EPLLPA_PRS_R20_DPG.W,PET.W_EPLLPA_PRS_SWI_DPG.W",
				"US-WV": "PET.W_EPLLPA_PWR_R10_DPG.W,PET.W_EPLLPA_PWR_R1Z_DPG.W,PET.W_EPLLPA_PRS_R10_DPG.W",
				"US-WY": "PET.W_EPLLPA_PWR_R40_DPG.W,PET.W_EPLLPA_PRS_R40_DPG.W"
			}
        }
    },
    oil: {
        prices: {
			"frequency": "W",
			"date_offset":-260,
			"credits" : {
				text : 'Sources: U.S. Energy Information Administration, Oil Price Information Service'
			},
			"sourcekeys" : {
				"US": "PET.W_EPD2F_PWR_NUS_DPG.W,PET.W_EPD2F_PRS_NUS_DPG.W",
				"US-AK": "",
				"US-AL": "",
				"US-AR": "",
				"US-AZ": "",
				"US-CA": "",
				"US-CO": "",
				"US-CT": "PET.W_EPD2F_PWR_R1X_DPG.W,PET.W_EPD2F_PWR_R1X_DPG.W,PET.W_EPD2F_PWR_SCT_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1X_DPG.W,PET.W_EPD2F_PRS_SCT_DPG.W",
				"US-DC": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1Y_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1Y_DPG.W,PET.W_EPD2F_PRS_SDC_DPG.W",
				"US-DE": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1Y_DPG.W,PET.W_EPD2F_PWR_SDE_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1Y_DPG.W,PET.W_EPD2F_PRS_SDE_DPG.W",
				"US-FL": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1Z_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1Z_DPG.W",
				"US-GA": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1Z_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1Z_DPG.W",
				"US-HI": "",
				"US-IA": "PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PWR_SIA_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W,PET.W_EPD2F_PRS_SIA_DPG.W",
				"US-ID": "",
				"US-IL": "PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PWR_SIL_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W,PET.W_EPD2F_PRS_SIL_DPG.W",
				"US-IN": "PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PWR_SIN_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W,PET.W_EPD2F_PRS_SIN_DPG.W",
				"US-KS": "PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PWR_SKS_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W",
				"US-KY": "PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PWR_SKY_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W,PET.W_EPD2F_PRS_SKY_DPG.W",
				"US-LA": "",
				"US-MA": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1X_DPG.W,PET.W_EPD2F_PWR_SMA_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1X_DPG.W,PET.W_EPD2F_PRS_SMA_DPG.W",
				"US-MD": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1Y_DPG.W,PET.W_EPD2F_PWR_SMD_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1Y_DPG.W,PET.W_EPD2F_PRS_SMD_DPG.W",
				"US-ME": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1X_DPG.W,PET.W_EPD2F_PWR_SME_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1X_DPG.W,PET.W_EPD2F_PRS_SME_DPG.W",
				"US-MI": "PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PWR_SMI_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W,PET.W_EPD2F_PRS_SMI_DPG.W",
				"US-MN": "PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PWR_SMN_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W,PET.W_EPD2F_PRS_SMN_DPG.W",
				"US-MO": "PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PWR_SMO_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W",
				"US-MS": "",
				"US-MT": "",
				"US-NC": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1Z_DPG.W,PET.W_EPD2F_PWR_SNC_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1Z_DPG.W,PET.W_EPD2F_PRS_SNC_DPG.W",
				"US-ND": "PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PWR_SND_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W",
				"US-NE": "PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PWR_SNE_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W,PET.W_EPD2F_PRS_SNE_DPG.W",
				"US-NH": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1X_DPG.W,PET.W_EPD2F_PWR_SNH_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1X_DPG.W,PET.W_EPD2F_PRS_SNH_DPG.W",
				"US-NJ": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1Y_DPG.W,PET.W_EPD2F_PWR_SNJ_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1Y_DPG.W,PET.W_EPD2F_PRS_SNJ_DPG.W",
				"US-NM": "",
				"US-NV": "",
				"US-NY": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1Y_DPG.W,PET.W_EPD2F_PWR_SNY_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1Y_DPG.W,PET.W_EPD2F_PRS_SNY_DPG.W",
				"US-OH": "PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PWR_SOH_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W,PET.W_EPD2F_PRS_SOH_DPG.W",
				"US-OK": "PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W",
				"US-OR": "",
				"US-PA": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1Y_DPG.W,PET.W_EPD2F_PWR_SPA_DPG.W,PET.W_EPD2F_PRS_SPA_DPG.W",
				"US-RI": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1X_DPG.W,PET.W_EPD2F_PWR_SRI_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1X_DPG.W,PET.W_EPD2F_PRS_SRI_DPG.W",
				"US-SC": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1Z_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1Z_DPG.W",
				"US-SD": "PET.W_EPD2F_PWR_SSD_DPG.W,PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W",
				"US-TN": "PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W",
				"US-TX": "",
				"US-UT": "",
				"US-VA": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1Z_DPG.W,PET.W_EPD2F_PWR_SVA_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1Z_DPG.W,PET.W_EPD2F_PRS_SVA_DPG.W",
				"US-VT": "PET.W_EPD2F_PRS_SVT_DPG.W,PET.W_EPD2F_PWR_SVT_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PRS_R1X_DPG.W,PET.W_EPD2F_PWR_R1X_DPG.W",
				"US-WA": "",
				"US-WI": "PET.W_EPD2F_PWR_R20_DPG.W,PET.W_EPD2F_PWR_SWI_DPG.W,PET.W_EPD2F_PRS_R20_DPG.W,PET.W_EPD2F_PRS_SWI_DPG.W",
				"US-WV": "PET.W_EPD2F_PWR_R10_DPG.W,PET.W_EPD2F_PWR_R1Z_DPG.W,PET.W_EPD2F_PRS_R10_DPG.W,PET.W_EPD2F_PRS_R1Z_DPG.W",
				"US-WY": ""
			}
        },
        storage: {
			"frequency": "W",
			"date_offset":-260,
			"sourcekeys" : {
				"US": "PET.WDISTUS1.W",
				"US-AK": "PET.WDISTP51.W",
				"US-AL": "PET.WDISTP31.W",
				"US-AR": "PET.WDISTP31.W",
				"US-AZ": "PET.WDISTP51.W",
				"US-CA": "PET.WDISTP51.W",
				"US-CO": "PET.WDISTP41.W",
				"US-CT": "PET.WDISTP11.W,PET.WDIST1A1.W,PET.WDIST1B1.W",
				"US-DC": "PET.WDISTP11.W,PET.WDIST1B1.W",
				"US-DE": "PET.WDISTP11.W,PET.WDIST1B1.W",
				"US-FL": "PET.WDISTP11.W,PET.WDIST1C1.W",
				"US-GA": "PET.WDISTP11.W,PET.WDIST1C1.W",
				"US-HI": "PET.WDISTP51.W",
				"US-IA": "PET.WDISTP21.W",
				"US-ID": "PET.WDISTP41.W",
				"US-IL": "PET.WDISTP21.W",
				"US-IN": "PET.WDISTP21.W",
				"US-KS": "PET.WDISTP21.W",
				"US-KY": "PET.WDISTP21.W",
				"US-LA": "PET.WDISTP31.W",
				"US-MA": "PET.WDISTP11.W,PET.WDIST1A1.W,PET.WDIST1B1.W",
				"US-MD": "PET.WDISTP11.W,PET.WDIST1B1.W",
				"US-ME": "PET.WDISTP11.W,PET.WDIST1A1.W,PET.WDIST1B1.W",
				"US-MI": "PET.WDISTP21.W",
				"US-MN": "PET.WDISTP21.W",
				"US-MO": "PET.WDISTP21.W",
				"US-MS": "PET.WDISTP31.W",
				"US-MT": "PET.WDISTP41.W",
				"US-NC": "PET.WDISTP11.W,PET.WDIST1C1.W",
				"US-ND": "PET.WDISTP21.W",
				"US-NE": "PET.WDISTP21.W",
				"US-NH": "PET.WDISTP11.W,PET.WDIST1A1.W,PET.WDIST1B1.W",
				"US-NJ": "PET.WDISTP11.W,PET.WDIST1B1.W",
				"US-NM": "PET.WDISTP31.W",
				"US-NV": "PET.WDISTP51.W",
				"US-NY": "PET.WDISTP11.W,PET.WDIST1B1.W",
				"US-OH": "PET.WDISTP21.W",
				"US-OK": "PET.WDISTP21.W",
				"US-OR": "PET.WDISTP51.W",
				"US-PA": "PET.WDISTP11.W,PET.WDIST1B1.W",
				"US-RI": "PET.WDISTP11.W,PET.WDIST1A1.W,PET.WDIST1B1.W",
				"US-SC": "PET.WDISTP11.W,PET.WDIST1C1.W",
				"US-SD": "PET.WDISTP21.W",
				"US-TN": "PET.WDISTP21.W",
				"US-TX": "PET.WDISTP31.W",
				"US-UT": "PET.WDISTP41.W",
				"US-VA": "PET.WDISTP11.W,PET.WDIST1C1.W",
				"US-VT": "PET.WDISTP11.W,PET.WDIST1A1.W,PET.WDIST1B1.W",
				"US-WA": "PET.WDISTP51.W",
				"US-WI": "PET.WDISTP21.W",
				"US-WV": "PET.WDISTP11.W,PET.WDIST1C1.W",
				"US-WY": "PET.WDISTP41.W"
			}
		}
    },
    natgas: {
        prices: {
			"frequency": "M",
			"date_offset":-60,
			"sourcekeys" : {
				"US": "NG.RNGWHHD.W,NG.N3050US3.M,NG.N3010US3.M,NG.N3020US3.M,NG.N3035US3.M",
				"US-AK": "NG.N3050AK3.M,NG.N3010AK3.M,NG.N3020AK3.M,NG.N3035AK3.M",
				"US-AL": "NG.N3050AL3.M,NG.N3010AL3.M,NG.N3020AL3.M,NG.N3035AL3.M",
				"US-AR": "NG.N3050AR3.M,NG.N3010AR3.M,NG.N3020AR3.M,NG.N3035AR3.M",
				"US-AZ": "NG.N3050AZ3.M,NG.N3010AZ3.M,NG.N3020AZ3.M,NG.N3035AZ3.M",
				"US-CA": "NG.N3050CA3.M,NG.N3010CA3.M,NG.N3020CA3.M,NG.N3035CA3.M",
				"US-CO": "NG.N3050CO3.M,NG.N3010CO3.M,NG.N3020CO3.M,NG.N3035CO3.M",
				"US-CT": "NG.N3050CT3.M,NG.N3010CT3.M,NG.N3020CT3.M,NG.N3035CT3.M",
				"US-DC": "NG.N3050DC3.M,NG.N3010DC3.M,NG.N3020DC3.M,NG.N3035DC3.M",
				"US-DE": "NG.N3050DE3.M,NG.N3010DE3.M,NG.N3020DE3.M,NG.N3035DE3.M",
				"US-FL": "NG.N3050FL3.M,NG.N3010FL3.M,NG.N3020FL3.M,NG.N3035FL3.M",
				"US-GA": "NG.N3050GA3.M,NG.N3010GA3.M,NG.N3020GA3.M,NG.N3035GA3.M",
				"US-HI": "NG.N3050HI3.M,NG.N3010HI3.M,NG.N3020HI3.M,NG.N3035HI3.M",
				"US-IA": "NG.N3050IA3.M,NG.N3010IA3.M,NG.N3020IA3.M,NG.N3035IA3.M",
				"US-ID": "NG.N3050ID3.M,NG.N3010ID3.M,NG.N3020ID3.M,NG.N3035ID3.M",
				"US-IL": "NG.N3050IL3.M,NG.N3010IL3.M,NG.N3020IL3.M,NG.N3035IL3.M",
				"US-IN": "NG.N3050IN3.M,NG.N3010IN3.M,NG.N3020IN3.M,NG.N3035IN3.M",
				"US-KS": "NG.N3050KS3.M,NG.N3010KS3.M,NG.N3020KS3.M,NG.N3035KS3.M",
				"US-KY": "NG.N3050KY3.M,NG.N3010KY3.M,NG.N3020KY3.M,NG.N3035KY3.M",
				"US-LA": "NG.N3050LA3.M,NG.N3010LA3.M,NG.N3020LA3.M,NG.N3035LA3.M",
				"US-MA": "NG.N3050MA3.M,NG.N3010MA3.M,NG.N3020MA3.M,NG.N3035MA3.M",
				"US-MD": "NG.N3050MD3.M,NG.N3010MD3.M,NG.N3020MD3.M,NG.N3035MD3.M",
				"US-ME": "NG.N3050ME3.M,NG.N3010ME3.M,NG.N3020ME3.M,NG.N3035ME3.M",
				"US-MI": "NG.N3050MI3.M,NG.N3010MI3.M,NG.N3020MI3.M,NG.N3035MI3.M",
				"US-MN": "NG.N3050MN3.M,NG.N3010MN3.M,NG.N3020MN3.M,NG.N3035MN3.M",
				"US-MO": "NG.N3050MO3.M,NG.N3010MO3.M,NG.N3020MO3.M,NG.N3035MO3.M",
				"US-MS": "NG.N3050MS3.M,NG.N3010MS3.M,NG.N3020MS3.M,NG.N3035MS3.M",
				"US-MT": "NG.N3050MT3.M,NG.N3010MT3.M,NG.N3020MT3.M,NG.N3035MT3.M",
				"US-NC": "NG.N3050NC3.M,NG.N3010NC3.M,NG.N3020NC3.M,NG.N3035NC3.M",
				"US-ND": "NG.N3050ND3.M,NG.N3010ND3.M,NG.N3020ND3.M,NG.N3035ND3.M",
				"US-NE": "NG.N3050NE3.M,NG.N3010NE3.M,NG.N3020NE3.M,NG.N3035NE3.M",
				"US-NH": "NG.N3050NH3.M,NG.N3010NH3.M,NG.N3020NH3.M,NG.N3035NH3.M",
				"US-NJ": "NG.N3050NJ3.M,NG.N3010NJ3.M,NG.N3020NJ3.M,NG.N3035NJ3.M",
				"US-NM": "NG.N3050NM3.M,NG.N3010NM3.M,NG.N3020NM3.M,NG.N3035NM3.M",
				"US-NV": "NG.N3050NV3.M,NG.N3010NV3.M,NG.N3020NV3.M,NG.N3035NV3.M",
				"US-NY": "NG.N3050NY3.M,NG.N3010NY3.M,NG.N3020NY3.M,NG.N3035NY3.M",
				"US-OH": "NG.N3050OH3.M,NG.N3010OH3.M,NG.N3020OH3.M,NG.N3035OH3.M",
				"US-OK": "NG.N3050OK3.M,NG.N3010OK3.M,NG.N3020OK3.M,NG.N3035OK3.M",
				"US-OR": "NG.N3050OR3.M,NG.N3010OR3.M,NG.N3020OR3.M,NG.N3035OR3.M",
				"US-PA": "NG.N3050PA3.M,NG.N3010PA3.M,NG.N3020PA3.M,NG.N3035PA3.M",
				"US-RI": "NG.N3050RI3.M,NG.N3010RI3.M,NG.N3020RI3.M,NG.N3035RI3.M",
				"US-SC": "NG.N3050SC3.M,NG.N3010SC3.M,NG.N3020SC3.M,NG.N3035SC3.M",
				"US-SD": "NG.N3050SD3.M,NG.N3010SD3.M,NG.N3020SD3.M,NG.N3035SD3.M",
				"US-TN": "NG.N3050TN3.M,NG.N3010TN3.M,NG.N3020TN3.M,NG.N3035TN3.M",
				"US-TX": "NG.N3050TX3.M,NG.N3010TX3.M,NG.N3020TX3.M,NG.N3035TX3.M",
				"US-UT": "NG.N3050UT3.M,NG.N3010UT3.M,NG.N3020UT3.M,NG.N3035UT3.M",
				"US-VA": "NG.N3050VA3.M,NG.N3010VA3.M,NG.N3020VA3.M,NG.N3035VA3.M",
				"US-VT": "NG.N3050VT3.M,NG.N3010VT3.M,NG.N3020VT3.M,NG.N3035VT3.M",
				"US-WA": "NG.N3050WA3.M,NG.N3010WA3.M,NG.N3020WA3.M,NG.N3035WA3.M",
				"US-WI": "NG.N3050WI3.M,NG.N3010WI3.M,NG.N3020WI3.M,NG.N3035WI3.M",
				"US-WV": "NG.N3050WV3.M,NG.N3010WV3.M,NG.N3020WV3.M,NG.N3035WV3.M",
				"US-WY": "NG.N3050WY3.M,NG.N3010WY3.M,NG.N3020WY3.M,NG.N3035WY3.M"
			}
        },
        storage: {
			"frequency": "W",
			"date_offset":-260,
			"sourcekeys" : {
				"US": "NG.NW2_EPG0_SWO_R48_BCF.W",
				"US-AK": "NG.NW2_EPG0_SWO_R35_BCF.W",
				"US-AL": "NG.NW2_EPG0_SWO_R33_BCF.W",
				"US-AR": "NG.NW2_EPG0_SWO_R33_BCF.W",
				"US-AZ": "NG.NW2_EPG0_SWO_R34_BCF.W",
				"US-CA": "NG.NW2_EPG0_SWO_R35_BCF.W",
				"US-CO": "NG.NW2_EPG0_SWO_R34_BCF.W",
				"US-CT": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-DC": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-DE": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-FL": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-GA": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-HI": "NG.NW2_EPG0_SWO_R35_BCF.W",
				"US-IA": "NG.NW2_EPG0_SWO_R32_BCF.W",
				"US-ID": "NG.NW2_EPG0_SWO_R34_BCF.W",
				"US-IL": "NG.NW2_EPG0_SWO_R32_BCF.W",
				"US-IN": "NG.NW2_EPG0_SWO_R32_BCF.W",
				"US-KS": "NG.NW2_EPG0_SWO_R33_BCF.W",
				"US-KY": "NG.NW2_EPG0_SWO_R32_BCF.W",
				"US-LA": "NG.NW2_EPG0_SWO_R33_BCF.W",
				"US-MA": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-MD": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-ME": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-MI": "NG.NW2_EPG0_SWO_R32_BCF.W",
				"US-MN": "NG.NW2_EPG0_SWO_R32_BCF.W",
				"US-MO": "NG.NW2_EPG0_SWO_R32_BCF.W",
				"US-MS": "NG.NW2_EPG0_SWO_R33_BCF.W",
				"US-MT": "NG.NW2_EPG0_SWO_R34_BCF.W",
				"US-NC": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-ND": "NG.NW2_EPG0_SWO_R34_BCF.W",
				"US-NE": "NG.NW2_EPG0_SWO_R34_BCF.W",
				"US-NH": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-NJ": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-NM": "NG.NW2_EPG0_SWO_R34_BCF.W",
				"US-NV": "NG.NW2_EPG0_SWO_R34_BCF.W",
				"US-NY": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-OH": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-OK": "NG.NW2_EPG0_SWO_R33_BCF.W",
				"US-OR": "NG.NW2_EPG0_SWO_R35_BCF.W",
				"US-PA": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-RI": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-SC": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-SD": "NG.NW2_EPG0_SWO_R34_BCF.W",
				"US-TN": "NG.NW2_EPG0_SWO_R32_BCF.W",
				"US-TX": "NG.NW2_EPG0_SWO_R33_BCF.W",
				"US-UT": "NG.NW2_EPG0_SWO_R34_BCF.W",
				"US-VA": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-VT": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-WA": "NG.NW2_EPG0_SWO_R35_BCF.W",
				"US-WI": "NG.NW2_EPG0_SWO_R32_BCF.W",
				"US-WV": "NG.NW2_EPG0_SWO_R31_BCF.W",
				"US-WY": "NG.NW2_EPG0_SWO_R34_BCF.W"
			}
        }
    },
    elec: {
        prices: {
			"frequency": "M",
			"date_offset":-60,
			"sourcekeys" : {
				"US": "ELEC.PRICE.US-ALL.M",
				"US-AK": "ELEC.PRICE.AK-ALL.M",
				"US-AL": "ELEC.PRICE.AL-ALL.M",
				"US-AR": "ELEC.PRICE.AR-ALL.M",
				"US-AZ": "ELEC.PRICE.AZ-ALL.M",
				"US-CA": "ELEC.PRICE.CA-ALL.M",
				"US-CO": "ELEC.PRICE.CO-ALL.M",
				"US-CT": "ELEC.PRICE.CT-ALL.M",
				"US-DC": "ELEC.PRICE.DC-ALL.M",
				"US-DE": "ELEC.PRICE.DE-ALL.M",
				"US-FL": "ELEC.PRICE.FL-ALL.M",
				"US-GA": "ELEC.PRICE.GA-ALL.M",
				"US-HI": "ELEC.PRICE.HI-ALL.M",
				"US-IA": "ELEC.PRICE.IA-ALL.M",
				"US-ID": "ELEC.PRICE.ID-ALL.M",
				"US-IL": "ELEC.PRICE.IL-ALL.M",
				"US-IN": "ELEC.PRICE.IN-ALL.M",
				"US-KS": "ELEC.PRICE.KS-ALL.M",
				"US-KY": "ELEC.PRICE.KY-ALL.M",
				"US-LA": "ELEC.PRICE.LA-ALL.M",
				"US-MA": "ELEC.PRICE.MA-ALL.M",
				"US-MD": "ELEC.PRICE.MD-ALL.M",
				"US-ME": "ELEC.PRICE.ME-ALL.M",
				"US-MI": "ELEC.PRICE.MI-ALL.M",
				"US-MN": "ELEC.PRICE.MN-ALL.M",
				"US-MO": "ELEC.PRICE.MO-ALL.M",
				"US-MS": "ELEC.PRICE.MS-ALL.M",
				"US-MT": "ELEC.PRICE.MT-ALL.M",
				"US-NC": "ELEC.PRICE.NC-ALL.M",
				"US-ND": "ELEC.PRICE.ND-ALL.M",
				"US-NE": "ELEC.PRICE.NE-ALL.M",
				"US-NH": "ELEC.PRICE.NH-ALL.M",
				"US-NJ": "ELEC.PRICE.NJ-ALL.M",
				"US-NM": "ELEC.PRICE.NM-ALL.M",
				"US-NV": "ELEC.PRICE.NV-ALL.M",
				"US-NY": "ELEC.PRICE.NY-ALL.M",
				"US-OH": "ELEC.PRICE.OH-ALL.M",
				"US-OK": "ELEC.PRICE.OK-ALL.M",
				"US-OR": "ELEC.PRICE.OR-ALL.M",
				"US-PA": "ELEC.PRICE.PA-ALL.M",
				"US-RI": "ELEC.PRICE.RI-ALL.M",
				"US-SC": "ELEC.PRICE.SC-ALL.M",
				"US-SD": "ELEC.PRICE.SD-ALL.M",
				"US-TN": "ELEC.PRICE.TN-ALL.M",
				"US-TX": "ELEC.PRICE.TX-ALL.M",
				"US-UT": "ELEC.PRICE.UT-ALL.M",
				"US-VA": "ELEC.PRICE.VA-ALL.M",
				"US-VT": "ELEC.PRICE.VT-ALL.M",
				"US-WA": "ELEC.PRICE.WA-ALL.M",
				"US-WI": "ELEC.PRICE.WI-ALL.M",
				"US-WV": "ELEC.PRICE.WV-ALL.M",
				"US-WY": "ELEC.PRICE.WY-ALL.M"
			}
        },
        storage: {  //for electricity, total gen and NG gen
			"frequency": "M",
			"date_offset":-60,
			"sourcekeys" : {
				"US": "ELEC.GEN.ALL-US-99.M,ELEC.GEN.NG-US-99.M",
				"US-AK": "ELEC.GEN.ALL-AK-99.M,ELEC.GEN.NG-AK-99.M",
				"US-AL": "ELEC.GEN.ALL-AL-99.M,ELEC.GEN.NG-AL-99.M",
				"US-AR": "ELEC.GEN.ALL-AR-99.M,ELEC.GEN.NG-AR-99.M",
				"US-AZ": "ELEC.GEN.ALL-AZ-99.M,ELEC.GEN.NG-AZ-99.M",
				"US-CA": "ELEC.GEN.ALL-CA-99.M,ELEC.GEN.NG-CA-99.M",
				"US-CO": "ELEC.GEN.ALL-CO-99.M,ELEC.GEN.NG-CO-99.M",
				"US-CT": "ELEC.GEN.ALL-CT-99.M,ELEC.GEN.NG-CT-99.M",
				"US-DC": "ELEC.GEN.ALL-DC-99.M,ELEC.GEN.NG-DC-99.M",
				"US-DE": "ELEC.GEN.ALL-DE-99.M,ELEC.GEN.NG-DE-99.M",
				"US-FL": "ELEC.GEN.ALL-FL-99.M,ELEC.GEN.NG-FL-99.M",
				"US-GA": "ELEC.GEN.ALL-GA-99.M,ELEC.GEN.NG-GA-99.M",
				"US-HI": "ELEC.GEN.ALL-HI-99.M,ELEC.GEN.NG-HI-99.M",
				"US-IA": "ELEC.GEN.ALL-IA-99.M,ELEC.GEN.NG-IA-99.M",
				"US-ID": "ELEC.GEN.ALL-ID-99.M,ELEC.GEN.NG-ID-99.M",
				"US-IL": "ELEC.GEN.ALL-IL-99.M,ELEC.GEN.NG-IL-99.M",
				"US-IN": "ELEC.GEN.ALL-IN-99.M,ELEC.GEN.NG-IN-99.M",
				"US-KS": "ELEC.GEN.ALL-KS-99.M,ELEC.GEN.NG-KS-99.M",
				"US-KY": "ELEC.GEN.ALL-KY-99.M,ELEC.GEN.NG-KY-99.M",
				"US-LA": "ELEC.GEN.ALL-LA-99.M,ELEC.GEN.NG-LA-99.M",
				"US-MA": "ELEC.GEN.ALL-MA-99.M,ELEC.GEN.NG-MA-99.M",
				"US-MD": "ELEC.GEN.ALL-MD-99.M,ELEC.GEN.NG-MD-99.M",
				"US-ME": "ELEC.GEN.ALL-ME-99.M,ELEC.GEN.NG-ME-99.M",
				"US-MI": "ELEC.GEN.ALL-MI-99.M,ELEC.GEN.NG-MI-99.M",
				"US-MN": "ELEC.GEN.ALL-MN-99.M,ELEC.GEN.NG-MN-99.M",
				"US-MO": "ELEC.GEN.ALL-MO-99.M,ELEC.GEN.NG-MO-99.M",
				"US-MS": "ELEC.GEN.ALL-MS-99.M,ELEC.GEN.NG-MS-99.M",
				"US-MT": "ELEC.GEN.ALL-MT-99.M,ELEC.GEN.NG-MT-99.M",
				"US-NC": "ELEC.GEN.ALL-NC-99.M,ELEC.GEN.NG-NC-99.M",
				"US-ND": "ELEC.GEN.ALL-ND-99.M,ELEC.GEN.NG-ND-99.M",
				"US-NE": "ELEC.GEN.ALL-NE-99.M,ELEC.GEN.NG-NE-99.M",
				"US-NH": "ELEC.GEN.ALL-NH-99.M,ELEC.GEN.NG-NH-99.M",
				"US-NJ": "ELEC.GEN.ALL-NJ-99.M,ELEC.GEN.NG-NJ-99.M",
				"US-NM": "ELEC.GEN.ALL-NM-99.M,ELEC.GEN.NG-NM-99.M",
				"US-NV": "ELEC.GEN.ALL-NV-99.M,ELEC.GEN.NG-NV-99.M",
				"US-NY": "ELEC.GEN.ALL-NY-99.M,ELEC.GEN.NG-NY-99.M",
				"US-OH": "ELEC.GEN.ALL-OH-99.M,ELEC.GEN.NG-OH-99.M",
				"US-OK": "ELEC.GEN.ALL-OK-99.M,ELEC.GEN.NG-OK-99.M",
				"US-OR": "ELEC.GEN.ALL-OR-99.M,ELEC.GEN.NG-OR-99.M",
				"US-PA": "ELEC.GEN.ALL-PA-99.M,ELEC.GEN.NG-PA-99.M",
				"US-RI": "ELEC.GEN.ALL-RI-99.M,ELEC.GEN.NG-RI-99.M",
				"US-SC": "ELEC.GEN.ALL-SC-99.M,ELEC.GEN.NG-SC-99.M",
				"US-SD": "ELEC.GEN.ALL-SD-99.M,ELEC.GEN.NG-SD-99.M",
				"US-TN": "ELEC.GEN.ALL-TN-99.M,ELEC.GEN.NG-TN-99.M",
				"US-TX": "ELEC.GEN.ALL-TX-99.M,ELEC.GEN.NG-TX-99.M",
				"US-UT": "ELEC.GEN.ALL-UT-99.M,ELEC.GEN.NG-UT-99.M",
				"US-VA": "ELEC.GEN.ALL-VA-99.M,ELEC.GEN.NG-VA-99.M",
				"US-VT": "ELEC.GEN.ALL-VT-99.M,ELEC.GEN.NG-VT-99.M",
				"US-WA": "ELEC.GEN.ALL-WA-99.M,ELEC.GEN.NG-WA-99.M",
				"US-WI": "ELEC.GEN.ALL-WI-99.M,ELEC.GEN.NG-WI-99.M",
				"US-WV": "ELEC.GEN.ALL-WV-99.M,ELEC.GEN.NG-WV-99.M",
				"US-WY": "ELEC.GEN.ALL-WY-99.M,ELEC.GEN.NG-WY-99.M"
			}
        }
    }
};

var active_alerts =  {  //turns state red and used in map's pop up label
    "US-OH":  "propane"
};
var map_alerts = [];
var showCode = "US"; //initially set to show US level pricing.  This is changed by Hasher

function abbrToState(state) {
  var states = ["ALABAMA","ALASKA","AMERICAN SAMOA","ARIZONA","ARKANSAS","CALIFORNIA","COLORADO","CONNECTICUT","DELAWARE","DISTRICT OF COLUMBIA","FEDERATED STATES OF MICRONESIA","FLORIDA","GEORGIA","GUAM","HAWAII","IDAHO","ILLINOIS","INDIANA","IOWA","KANSAS","KENTUCKY","LOUISIANA","MAINE","MARSHALL ISLANDS","MARYLAND","MASSACHUSETTS","MICHIGAN","MINNESOTA","MISSISSIPPI","MISSOURI","MONTANA","NEBRASKA","NEVADA","NEW HAMPSHIRE","NEW JERSEY","NEW MEXICO","NEW YORK","NORTH CAROLINA","NORTH DAKOTA","NORTHERN MARIANA ISLANDS","OHIO","OKLAHOMA","OREGON","PALAU","PENNSYLVANIA","PUERTO RICO","RHODE ISLAND","SOUTH CAROLINA","SOUTH DAKOTA","TENNESSEE","TEXAS","UTAH","VERMONT","VIRGIN ISLANDS","VIRGINIA","WASHINGTON","WEST VIRGINIA","WISCONSIN","WYOMING","United States"];
  var abbr = [
"US-AL","US-AK","US-AS","US-AZ","US-AR","US-CA","US-CO","US-CT","US-DE","US-DC","US-FM","US-FL","US-GA","US-GU","US-HI","US-ID","US-IL","US-IN","US-IA","US-KS","US-KY","US-LA","US-ME","US-MH","US-MD","US-MA","US-MI","US-MN","US-MS","US-MO","US-MT","US-NE","US-NV","US-NH","US-NJ","US-NM","US-NY","US-NC","US-ND","US-MP","US-OH","US-OK","US-OR","US-PW","US-PA","US-PR","US-RI","US-SC","US-SD","US-TN","US-TX","US-UT","US-VT","US-VI","US-VA","US-WA","US-WV","US-WI","US-WY","US" ];
  if(abbr.indexOf(state)>-1)
    state=states[abbr.indexOf(state)];
  return state;
}

var map;

	var clearMap = function(){
		map.clearSelectedRegions();	
	}

$(document).ready(function(){
	
    //$('.nav_map').vectorMap({
	map = new jvm.Map({
        container: $('.nav_map'),
        map: 'us_merc_en',
        backgroundColor: "white",
		labels: {
          regions: {
            render: function(code){
                return code.split('-')[1];
            },
            offsets: function(code){
              return {
                'CA': [-10, 10],
                'ID': [0, 40],
                'OK': [25, 0],
                'LA': [-20, 0],
                'FL': [35, 0],
                'KY': [10, 10],
                'VA': [15, 5],
                'MI': [30, 30],
                'AK': [35, -25],
                'HI': [25, 50],
                'MN': [-15, 0],
                'TN': [0, 5],
                'WV': [-10, 15],
                'NY': [0, 5],
                'NH': [0, 20],
                'RI': [20, 20],
                'DC': [30, 30]
              }[code.split('-')[1]];
            }
          }
		},
        series: {
            regions:  [
                {
                    attribute: "fill"
                }
            ]
        },
        onRegionTipShow: function(e, tip, code){
            var alert="<b>"+eachWord(abbrToState(code).toLowerCase())+"</b><br>Click on "+eachWord(abbrToState(code).toLowerCase())+" to see its heating <br>fuels data displayed below.";
            //if(active_alerts[code]){
            //    alert +='Heating fuel alert:  Stocks alert for '+active_alerts[code]+' are below the 5-year range.';
            //} else {
            //    alert +='No alert. Heating fuel stock within 5-year ranges.';
            //}
            tip.html(alert).css("z-Index",400);
        },
		zoomOnScroll: false,
        regionsSelectable: true,
        regionsSelectableOne: true,
        onRegionSelected: function(e, code, isSelected, selectedRegions){
            if(isSelected){
                hasher.setHash((selectedRegions.length==1)?selectedRegions[0]:"US");
            }
        },
        regionStyle: {
            initial: {
                "stroke-width": 4,
                stroke: 'transparent',
                "stroke-opacity": 0,
                //fill: "#265281",  //"royalblue"
            },
            hover: {
                "stroke-width": 4,
                stroke: 'black',
                "fill-opacity": .5,
                "stroke-opacity": 1,
				//fill: "#000000"
            },
            selected: {
				//fill: "#000000"
                "fill-opacity": .5,
            }
        }
    });
    var $alertMap = $('.nav_map').vectorMap('get', 'mapObject');
	
	$('.nav_map').append("<div id='legend' class='blue_top'><h4>PADD Regions</h4><div style='clear:both;'></div></div>");
	$('#legend').append('<div class="fillBox" style="background-color:' + Highcharts.eia_blue + '"></div>');
	$('#legend').append('<div class="label">PADD 1</div>');
	$('#legend').append('<div class="fillBox" style="background-color:' + Highcharts.eia_green + '"></div>');
	$('#legend').append('<div class="label">PADD 2</div>');
	$('#legend').append('<div class="fillBox" style="background-color:' + Highcharts.eia_grey + '"></div>');
	$('#legend').append('<div class="label">PADD 3</div>');
	$('#legend').append('<div class="fillBox" style="background-color:' + Highcharts.eia_red + '"></div>');
	$('#legend').append('<div class="label">PADD 4</div>');
	$('#legend').append('<div class="fillBox" style="background-color:' + Highcharts.eia_yellow + '"></div>');
	$('#legend').append('<div class="label">PADD 5</div>');
	
    var alertAttributes = {};
	//JAK - 10/1/14 - Commenting out special alert color
    //for(var code in active_alerts){
    //    alertAttributes[code] = "darkorange";
    //}
    $alertMap.series.regions[0].setAttributes(alertAttributes);
	
	
    var myCustomColors = {
        'US-WA': Highcharts.eia_yellow,
        'US-OR': Highcharts.eia_yellow,
        'US-CA': Highcharts.eia_yellow,
        'US-NV': Highcharts.eia_yellow,
        'US-AZ': Highcharts.eia_yellow,
        'US-AK': Highcharts.eia_yellow,
        'US-HI': Highcharts.eia_yellow,
        'US-MT': Highcharts.eia_red,
        'US-ID': Highcharts.eia_red,
        'US-WY': Highcharts.eia_red,
        'US-UT': Highcharts.eia_red,
        'US-CO': Highcharts.eia_red,
        'US-ND': Highcharts.eia_green,
        'US-SD': Highcharts.eia_green,
        'US-NE': Highcharts.eia_green,
        'US-KS': Highcharts.eia_green,
        'US-OK': Highcharts.eia_green,
        'US-MN': Highcharts.eia_green,
        'US-IA': Highcharts.eia_green,
        'US-MO': Highcharts.eia_green,
        'US-WI': Highcharts.eia_green,
        'US-IL': Highcharts.eia_green,
        'US-MI': Highcharts.eia_green,
        'US-IN': Highcharts.eia_green,
        'US-OH': Highcharts.eia_green,
        'US-KY': Highcharts.eia_green,
        'US-TN': Highcharts.eia_green,
        'US-ME': Highcharts.eia_blue,
        'US-VT': Highcharts.eia_blue,
        'US-NH': Highcharts.eia_blue,
        'US-MA': Highcharts.eia_blue,
        'US-CT': Highcharts.eia_blue,
        'US-RI': Highcharts.eia_blue,
        'US-NY': Highcharts.eia_blue,
        'US-PA': Highcharts.eia_blue,
        'US-NJ': Highcharts.eia_blue,
        'US-MD': Highcharts.eia_blue,
        'US-DE': Highcharts.eia_blue,
        'US-WV': Highcharts.eia_blue,
        'US-VA': Highcharts.eia_blue,
        'US-NC': Highcharts.eia_blue,
        'US-SC': Highcharts.eia_blue,
        'US-GA': Highcharts.eia_blue,
        'US-FL': Highcharts.eia_blue,
        'US-NM': Highcharts.eia_grey,
        'US-TX': Highcharts.eia_grey,
        'US-LA': Highcharts.eia_grey,
        'US-AR': Highcharts.eia_grey,
        'US-MS': Highcharts.eia_grey,
        'US-AL': Highcharts.eia_grey,
        'US-DC': '#012345'
    };
	
    var statePadds = {
        'US-WA': 5,
        'US-OR': 5,
        'US-CA': 5,
        'US-NV': 5,
        'US-AZ': 5,
        'US-AK': 5,
        'US-HI': 5,
        'US-MT': 4,
        'US-ID': 4,
        'US-WY': 4,
        'US-UT': 4,
        'US-CO': 4,
        'US-ND': 2,
        'US-SD': 2,
        'US-NE': 2,
        'US-KS': 2,
        'US-OK': 2,
        'US-MN': 2,
        'US-IA': 2,
        'US-MO': 2,
        'US-WI': 2,
        'US-IL': 2,
        'US-MI': 2,
        'US-IN': 2,
        'US-OH': 2,
        'US-KY': 2,
        'US-TN': 2,
        'US-ME': 1,
        'US-VT': 1,
        'US-NH': 1,
        'US-MA': 1,
        'US-CT': 1,
        'US-RI': 1,
        'US-NY': 1,
        'US-PA': 1,
        'US-NJ': 1,
        'US-MD': 1,
        'US-DE': 1,
        'US-WV': 1,
        'US-VA': 1,
        'US-NC': 1,
        'US-SC': 1,
        'US-GA': 1,
        'US-FL': 1,
        'US-DC': 1,
        'US-NM': 3,
        'US-TX': 3,
        'US-LA': 3,
        'US-AR': 3,
        'US-MS': 3,
        'US-AL': 3
    };
	
	$alertMap.series.regions[0].setValues(myCustomColors);

    $('#tabs_fuels')
        .tabs(
        {activate: function(event, ui){
            if(ui.newPanel) showTab(ui.newPanel[0]);
        }
        });
    $('#tabs_outlook')
        .tabs();
	//$('#oil').hide(); //inital has will show nad fill


    var handleChanges = function(newHash, oldHash){
		if(newHash=='') newHash='US:propane:week';
        var name, fuel, outlook, $activePanels, $activeOutlook;
		var updateGraph=true;
        //is fuel==panel change?
        var hashParts = newHash.split(':');
		if(typeof oldHash !== 'undefined')
			var oldHashParts = oldHash.split(':');
		$activeOutlook=$('#tabs_outlook>div:visible');
        $activePanels = $('#tabs_fuels>div:visible');
        if(hashParts.length==3){
            if(!config.oil.storage.sourcekeys[hashParts[0]] || !config[hashParts[1]]) return; //unrecognized hash
			outlook = hashParts[2];
			fuel = hashParts[1];
			showCode = hashParts[0];
			if(showCode=='US') $('#statereources').html(''); else $('#statereources').load('stateresource.cfm?state='+encodeURI(abbrToState(showCode).toLowerCase())+'&sid='+showCode.substr(3));
        } else {
            if(config[newHash]){
                fuel = newHash; //its a fuel!				
            } else if(config.oil.storage.sourcekeys[newHash]){ //hash change must be a geography
				if(showCode != newHash) {
					if(newHash=='US') $('#statereources').html(''); else $('#statereources').load('stateresource.cfm?state='+encodeURI(abbrToState("US-"+newHash.substr(3)).toLowerCase())+'&sid='+newHash.substr(3));
				}
				showCode = newHash;
				name = (showCode == "US") ? "United States" : jvm.Map.maps.us_merc_en.paths[newHash].name;
                fuel = ($activePanels.length==1)?$activePanels[0].id:'oil';
            } else {
				//return; //unrecognized geography //JAK modifying to allow 3rd hash
				updateGraph=false;
				outlook = newHash;
				fuel = oldHashParts[1];
				showCode = oldHashParts[0];
            }
        }
		
		if(typeof outlook === 'undefined') outlook=($activeOutlook.length==1)?$activeOutlook[0].id:'week';
        if($activeOutlook.length!=1 || $activeOutlook[0].id!=outlook){
            $('#tabs_outlook>ul a[href="#'+outlook+'"]').click();
//            return;
        }
		
        if($activePanels.length!=1 || $activePanels[0].id!=fuel){
            $('#tabs_fuels>ul a[href="#'+fuel+'"]').click();
            return;
        }
		
        hasher.changed.active = false; //disable changed signal
        hasher.replaceHash(showCode + ':' + fuel + ':' + outlook);
        hasher.changed.active = true; //re-enable signal

        //2. create list source keys for the geography
        var geographyKeys = [];
        $.each(config, function(key, fuelObj){
            $.each(fuelObj, function(key, graphKeys){
                if(graphKeys.sourcekeys[showCode]!=""){
                    geographyKeys.push(graphKeys.sourcekeys[showCode]);
                }

            });
        });
        geographyKeys = geographyKeys.join();
        geographyKeys = geographyKeys.replace(',',';');
		
		if(updateGraph){
			//3. fetch the data
			//eia_widgets_prefill(geographyKeys);
			//4. call the tab click handler to make the graphs
			showTab($('#tabs_fuels>div:visible')[0]);
		}
    };

	var makeGraph = function(fuel,graph){
		if(config[fuel][graph].sourcekeys.chart) config[fuel][graph].sourcekeys.chart.destroy();
		var chartTitle=eachWord(graph);
		
		if(graph=="storage"&&fuel=="elec")
			chartTitle="Generation";

		var requestOptions = {
			chart : {
				renderTo: graph + "_" + fuel
			},
			plotOptions : {line: {marker: {enabled: true, radius: 1}}},
			appKey: "limiteduse3rdpartykey",
			chart_title: chartTitle,
			chart_exporting: true,
			chart_datetime: true,
			//frequency: "W",
			frequency: config[fuel][graph].frequency,
			//intervals: -260,
			intervals: config[fuel][graph].date_offset,
			series: []
		};
		if(typeof config[fuel][graph].captions != 'undefined') {
			requestOptions['captions'] = config[fuel][graph].captions
		}
		if(typeof config[fuel][graph].credits != 'undefined') {
			requestOptions['credits'] = config[fuel][graph].credits
		}

		var series_ids = config[fuel][graph].sourcekeys[showCode].split(',');

		$.each(series_ids, function(index, value){
			requestOptions.series.push({eia_series_id: value});
		});

		//WITH PROPER PREPROCESSING, SHOULD BE sourceKeys[fuel][graph].chart = Highcharts.Chart(requestOptions);
		//Highcharts.Chart.prototype.plotEIAChart(requestOptions);

		var chart = new Highcharts.Chart(requestOptions);
		//new Highcharts.Chart(requestOptions);
	};

    var showTab = function(panel){
        var $panel = $(panel);
        if($panel.attr('data')!=showCode){
            var fuel = panel.id;

            //stocks
            makeGraph(fuel,"storage");
           makeGraph(fuel,"prices");

        }
		var $geo= $('#geo');
		$geo.html("Data for "+eachWord(abbrToState(showCode).toLowerCase()));
		if(showCode!='US')
			$geo.append(" (PADD "+statePadds[showCode]+")")
    };
	
	var eachWord = function(str){
 	   return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	};
	
    hasher.changed.add(handleChanges); //add hash change listener
    hasher.initialized.add(handleChanges); //add initialized listener (to grab initial value in case it is already set)
    hasher.init(); //initialize hasher (start listening for history changes)

});
