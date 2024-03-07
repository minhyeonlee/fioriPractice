sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("sync04.zfc0220.controller.View1", {
            onInit: function () {

            },
            onSearch: function(){
                let condCarrid = this.getView().byId("inpCarrid").getValue();
                let condConnid = this.byId("inpConnid").getValue();
                // 'AA' Airline '17' Connection Number
                let sMesg = condCarrid + " Airline" + condConnid + " Connection Number";
                // alert(sMesg);
                MessageBox.show(sMesg, {
                    title : "Information"
                });
            }
        });
    });
