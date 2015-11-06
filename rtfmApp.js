var app = angular.module('rtfmApp', ['firebase', 'ui.router']);




app.constant('fb', 
             {
            url: 'https://rtfm-app-kyle.firebaseio.com'
});




app.config(function ($stateProvider, $urlRouterProvider) {
    
    
    $stateProvider
    
    .state('threads', {
        url: '/threads',
        templateUrl: '/threads/threads.html',
        controller: 'threadsCtrl',
        resolve: {
        
            threadsRef: function(threadsService) {
                
               return threadsService.getThreads();
                
            }
        
        
        }
    })
    
    .state('thread', {
        
        url:'/threads/:threadId',
        templateUrl: '/thread2/thread2.html',
        controller: 'threadCtrl2',
        resolve: {
            
            threadRef: function(threadsService, $stateParams) {
                return threadsService.getThread($stateParams.threadId);
            }
            
            
        },
        
        commentsRef: function(threadsService, $stateParams) {
            
            return threadsService.getComments($stateParams.threadId);
            
        }
        
        
        
        
    })
    
    
    
    
    
    
    $urlRouterProvider.otherwise('/threads');
    
    
});