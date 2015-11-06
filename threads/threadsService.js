var app = angular.module('rtfmApp');



app.service('threadsService', function(fb) {
    
    
    var firebaseRef = new Firebase("https://rtfm-app-kyle.firebaseio.com/");
    
    
    
    this.getThreads = function() {
        
        return new Firebase(fb.url + '/threads');
        
        
    }
    
    
    
    
    this.getThread = function(threadId) {
        
        return new Firebase(fb.url + '/threads/' + threadId);
        
    }
    
    this.getComments = function(threadId) {
        
        return new Firebase(fb.url + '/threads/' + threadId + '/comments');
        
    }
    
    
});