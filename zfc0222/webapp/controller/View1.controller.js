sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("sync04.zfc0222.controller.View1", {
            onInit: function () {

            },
            onPopup: function(){
                let oView = this.getView();
                if( !this.getView().byId("diaInfo")){
                    // alert(this);
                    Fragment.load(
                        {
                            id: oView.getId(),
                            name: "sync04.zfc0222.view.PopupFrag",
                            type: "XML",
                            controller: this
                        }
                    ).then(
                        function ( oPopup ) {
                            oView.addDependent( oPopup );
                            oPopup.open();
                        }
                    );
                } else {
                    // alert("else");
                    oView.byId("diaInfo").open();
                }
            },
            onClose: function (){
                let oView = this.getView();
                let oDialog = oView.byId("diaInfo");
                oDialog.close();

            }
        });
    });
