({
    handleShowBasicModal: function(component, evt, helper) {
        var workspaceAPI = component.find("workspace");
        var tabId = workspaceAPI.getEnclosingTabId();
        
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        };
                
        /*
        workspaceAPI.getAllTabInfo().then(function(response) {
            console.log(response);
       }) */

       /*
       workspaceAPI.openTab({
            //pageReference: pageReference,
            url: '/lightning/o/Account',
            focus: true
        });
        */
        component.find('overlayLib').showCustomModal({
            header: "Not Authenticated",
            cssClass: "slds-modal_large, slds-backdrop",
            body: "Please Authenticate this Customer to continue",
            showCloseButton: true, 
            closeCallback: function() {
                workspaceAPI.closeTab(tabId);        
            }
        });
    },

    handleShowCustomModal: function(component, evt, helper) {
        if(component.get("v.isActive")) {
            var workspaceAPI = component.find("workspace");
            var tabId = workspaceAPI.getEnclosingTabId();
            var modalBody;
            $A.createComponent("c:newman", {},
                            function(content, status) {
                                if (status === "SUCCESS") {
                                    modalBody = content;
                                    component.find('overlayLib').showCustomModal({
                                        header: "Not Authenticated",
                                        body: modalBody, 
                                        showCloseButton: true,
                                        closeCallback: function() {
                                                workspaceAPI.closeTab(tabId);        
                                            }   
                                    })   
                                }
                            });
        }
    }
})
