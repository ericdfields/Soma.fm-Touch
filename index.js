Ext.setup({
    // tabletStartupScreen: 'tablet_startup.png',
    // phoneStartupScreen: 'phone_startup.png',
    // icon: 'icon.png',
    glossOnIcon: false,

    onReady: function() {

        var tapHandler = function(button, event) {
            var txt = "User tapped the '" + button.text + "' button.";
            alert(txt);
            // Ext.getCmp('toolbartxt').update(txt);
        };

        if (!Ext.is.Phone) {
            buttonsGroup1.push({xtype: 'spacer'});
            buttonsGroup2.push({xtype: 'spacer'});

            var dockedItems = [{
                xtype: 'toolbar',
                // dock this toolbar at the top
                dock: 'top',
                items: buttonsGroup1.concat(buttonsGroup2).concat(buttonsGroup3).concat(buttonsGroup4)
            }, {
                xtype: 'toolbar',
                // dock this toolbar at the bottom
                ui: 'light',
                dock: 'bottom',
                items: buttonsGroup1.concat(buttonsGroup2).concat(buttonsGroup3).concat(buttonsGroup4)
            }];
            new Ext.Panel({
                id: 'toolbartxt',
                fullscreen: true,
                // styleHtmlContent: true,
                dockedItems: dockedItems,
                defaults: {
                    scroll: 'vertical',
                    xtype: 'panel',
                    layout: 'hbox',
                    pack: 'justify',
                    align: 'center',
                    defaults: {
                        xtype: 'button',
                        ui: 'confirm'
                    }
                },
                items: [{
                    dockedItems: [
                        toolbar_icons, disabled_toolbar_icons
                    ],
                    items: buttonsGroup5.concat(buttonsGroup6)
                }]
            });
        // Phone has far less screen real-estate
        } else {
            var dockedItems = [{
                xtype: 'toolbar',
                ui: 'light',
                items: buttonsGroup1,
                dock: 'top'
            }, {
                xtype: 'toolbar',
                ui: 'dark',
                items: buttonsGroup2,
                dock: 'top'
            }, {
                xtype: 'toolbar',
                ui: 'dark',
                items: buttonsGroup3,
                dock: 'top'
            }, {
                xtype: 'toolbar',
                ui: 'light',
                items: buttonsGroup4,
                dock: 'bottom'
            }];
        }

        new Ext.Panel({
            id: 'toolbartxt',
            html: 'Pick a button, any button. <br /><small>By using SASS, all of the buttons on this screen can be restyled dynamically. The only images used are masks.</small>',
            fullscreen: true,
            styleHtmlContent: true,
            dockedItems: dockedItems
        });
    }
});
