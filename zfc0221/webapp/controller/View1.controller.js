sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sync04.zfc0221.controller.View1", {
            onInit: function () {

            },
            onMain: function(){
                alert("Main View" + this.getView().byId("inpFrag").getValue());
            },
            onFrag: function(){
                alert("Fragment View" + this.getView().byId("inpCarrid").getValue());
            }
        });
    });
