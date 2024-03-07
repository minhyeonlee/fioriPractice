sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sync04.zfc0206.controller.View1", {
            onInit: function () {

            },
            onSelect: function(){
                let oCheckbox = this.getView().byId("chkBox1");
                
                let textCheckBox = oCheckbox.getText();
                let checkValue = oCheckbox.getSelected();

                /*
                if(checkValue) {
                    oCheckbox.setText("Minhyeon");
                }
                else{
                    oCheckbox.setText("Check Box")
                }
                */
               
                if( oCheckbox.getSelected()){
                    oCheckbox.setText("Lee");
                } else {
                    oCheckbox.setText("Minhyeon");
                }

            }
        });
    });
