({
    handleShowCustomModal: function(component, evt, helper) {
        if( ! component.get("v.isActive") ) return;
        
        /*var pageReference = {    
            "type": "standard__navItemPage",
            "attributes": {
                 "apiName": "Authenticator"    
            },
            "state": {
                "customerId": component.get("v.recordId")
            }
        };*/
        var pageReference = {    
            "type": "standard__component",
            "attributes": {
                 "componentName": "c__UnauthenticatedCustomerView"    
            },
            "state": {
                "c__customerId": component.get("v.recordId")
            }
        };
        


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
                            workspaceAPI.openTab({
                                pageReference: pageReference,
                                focus: true
                            }).then(function(response){
                                 workspaceAPI.focusTab({tabId : response}); 
                                }
                            );
                            
                        }   
                    })   
                }
            });
    }
})
