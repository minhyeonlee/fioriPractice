sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox,Fragment) {
        "use strict";

        return Controller.extend("sync04.zfc0221.controller.View1", {
            onInit: function () {

            },
            onMain: function(){
                let oView = this.getView();
                let oInput = oView.byId(
                    Fragment.createId("idFrag", "inpCarrid")
                );
                let inpValue = oInput.getValue();
                alert("Main View " +inpValue);

                //mhlee
                // let oFragment = Fragment.createId("idFrag", "inpCarrid")
                // let oFragValue = this.getView().byId(oFragment).getValue();
                // alert("Main View"+oFragValue);

                //alert( this.getView().byId(
                    // Fragment.createId("idFrag", "inpCarrid")
                    // sap.ui.core.Fragment.createId("idFrag", "inpCarrid")
                //    )
                //);
                //alert("Main View " + this.getView().byId("inpCarrid").getValue());
            },
            onFrag: function(){
                alert("Fragment View " + this.getView().byId("inpCarrid").getValue());
            }
        });
    });
