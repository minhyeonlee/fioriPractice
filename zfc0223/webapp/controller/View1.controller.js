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

        return Controller.extend("sync04.zfc0223.controller.View1", {
            onInit: function () {

            },
            onSearch: function() {
                let oView = this.getView();
                let condCarrid = oView.byId("inpCarrid").getValue();
                let condConnid = oView.byId("inpConnid").getValue();
                let Msg = "'"+condCarrid+"'"+" Airline"+"'"+condConnid+"'"+" Connection Number";
                MessageBox.show(Msg, {title: "Airline Information"});
            },
            onPopup: function () {
                let oView = this.getView();
                if( !oView.byId("diaInfo")){
                    Fragment.load(
                        {
                            id: oView.getId(),
                            name: "sync04.zfc0223.view.popupFrag",
                            type: "XML",
                            controller: this
                        }
                    ).then(
                        function( oPopup ){
                            oView.addDependent( oPopup );
                            oPopup.open();
                        }
                    );
                } else{
                    oView.byId("diaInfo").open();
                }
            },
            onClose: function() {
                let oView = this.getView();
                oView.byId("diaInfo").close();
            }
        });
    });
