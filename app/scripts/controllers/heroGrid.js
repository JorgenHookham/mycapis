'use strict';

saveINTEapp.controller('heroGridController',
    function heroGridController ($scope) {

        // Masonry

        $scope.heroGrid = $('.hero-grid--container');
        $scope.heroGrid.masonry({
            itemSelector: '.hero-box',
            columnWidth: function( containerWidth ) {
                return containerWidth / 4;
            },
            isResizable: true
        });

        $(window).ready(function () {
            $scope.heroGrid.masonry('reload');
        });

        // Hero Grid Items (photos)

        $scope.photoBoxes = [
            {
                quote: 'My Cap embraces the synthesis of ideas and innovation across the Faculties.',
                author: 'Aurelea Mahood',
                credential: ' English Faculty',
                imageUrl: 'people/aurelea.jpg',
                type: 'photo',
                priority: 10,
                template: 'hero-box-templates/photo.html'
            },  
            {
                quote: 'My Cap is a twenty-first century university.',
                author: 'Joseph Fall',
                credential: 'Computer Science faculty',
                imageUrl: 'people/joseph.jpg',
                type: 'photo',
                priority: 14,
                template: 'hero-box-templates/photo.html'
            }      
            
            
            ];

        // Hero Grid Items (quote)

        $scope.quoteBoxes = [
            
            {
                quote: 'My Cap is mind opening.',
                author: 'Michelle Beckett',
                credential: 'Arts & Sciences student',
                type: 'quote',
                priority: 11,
                template: 'hero-box-templates/quote.html'
            }, 
              {
                quote: 'My Cap support students seeking opportunities for their futures.',
                author: 'Michelle Gunness',
                credential: 'ABE faculty',
                type: 'quote',
                priority: 13,
                template: 'hero-box-templates/quote.html'
            },  
            {
                quote: 'My Cap is a place where learning crosses boundaries.',
                author: 'Lyne Gareau',
                credential: 'Languages faculty',
                type: 'quote',
                priority: 16,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'I came to Capilano because I wanted a unique experience, not some cookie-cutter degree.',
                author: 'Katelyn Savard',
                credential: 'Jazz Studies student',
                type: 'quote',
                priority: 15,
                template: 'hero-box-templates/quote.html'
            }      
                  
            
            
            
             ];

        // Hero Grid Items (vine embeds)

        $scope.vineBoxes = [
           //  {
           //      title: 'Glitch Mob',
           //      embedUrl: 'http://vine.co/v/b55LOA1dgJU/embed/simple',
           //      type: 'video',
           //      priority: 5,
           //      template: 'hero-box-templates/vine.html'
           //  }
        ];

        // Hero Grid Items (youtube embeds)

        $scope.youtubeBoxes = [
            {
                embedUrl: 'http://www.youtube.com/embed/0CLuhdxH6_s',
                type: 'video',
                priority: 6,
                template: 'hero-box-templates/youtube.html'
            },
            {
                embedUrl: 'http://www.youtube.com/embed/l8mbajKlzVs',
                type: 'video',
                priority: 4,
                template: 'hero-box-templates/youtube.html'
            }
        ];

        // Concatenating hero box sources and sorting

        var heroBoxes = []
            .concat($scope.quoteBoxes)
            .concat($scope.photoBoxes)
            .concat($scope.vineBoxes)
            .concat($scope.youtubeBoxes);

        $scope.heroBoxes = heroBoxes.sort(function(a,b) { return parseFloat(a.priority) - parseFloat(b.priority) } );

});







