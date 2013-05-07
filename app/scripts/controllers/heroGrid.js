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
                quote: 'The goal is to put people in the work force and be employable, we look to these programs for our new stars.',
                author: 'Jason Bailey',
                credential: 'CEO, East Side Games',
                imageUrl: 'people/jason-bailey.jpg',
                type: 'photo',
                priority: 8,
                template: 'hero-box-templates/photo.html'
            },
            {
                quote: 'We have one of the best programs in the university, if anything it should be looked at as one of it\'s crowned jewels.',
                author: 'Parker Busswood',
                credential: 'Front-End Engineer, East Side Games',
                imageUrl: 'people/parker-busswood.jpg',
                type: 'photo',
                priority: 2,
                template: 'hero-box-templates/photo.html'
            },
            {
                quote: 'People from the INTE program come ready to wear many hats. Cutting this program would leave a big gap.',
                author: 'Josh Nilson',
                credential: 'COO, East Side Games',
                imageUrl: 'people/josh-nilson.jpg',
                type: 'photo',
                priority: 8,
                template: 'hero-box-templates/photo.html'
            },
            {
                quote: 'As an alumnus I stand to lose my biggest network, fresh talent coming out of the program.',
                author: 'Jørgen Hookham',
                credential: 'Designer, Sokanu',
                imageUrl: 'people/jorgen-hookham.jpg',
                type: 'photo',
                priority: 5,
                template: 'hero-box-templates/photo.html'
            },
            {
                quote: 'The world is having an asymmetric education problem, and you actually have a program where 85% of students get a job.',
                author: 'Spencer Thompson',
                credential: 'CEO, Sokanu',
                imageUrl: 'people/spencer-thompson.jpg',
                type: 'photo',
                priority: 6,
                template: 'hero-box-templates/photo.html'
            },
             {
                quote: 'To cut this innovative program would not only irreparably cripple the momentum of the institution, but it would also impact the bottom line of BC\'s tech industry for years to come.',
                author: 'Wil Arndt',
                credential: 'Owner, Mod7',
                imageUrl: 'people/wil-arndt.jpg',
                type: 'photo',
                priority: 6,
                template: 'hero-box-templates/photo.html'
            },
             {
                quote: 'We were thrilled when we discovered Capilano University\'s Interactive Design Program as they were one of the only institutions in the country with a focus in this critical and growing discipline.',
                author: 'Molly Schneeberg',
                credential: 'CEO, kibooco',
                imageUrl: 'people/molly-schneeberg.jpg',
                type: 'photo',
                priority: 6,
                template: 'hero-box-templates/photo.html'
            },
             {
                quote: 'I honestly don\'t know what I would be doing without the skills and knowledge the program has given me under my belt.',
                author: 'Poyan Behboudi',
                credential: 'INTE Graduate, 2013',
                imageUrl: 'people/poyan-behboudi.jpg',
                type: 'photo',
                priority: 6,
                template: 'hero-box-templates/photo.html'
            },
             {
                quote: 'Our industry is hurting for skilled practitioners and the Cap program produces quality grads who are the future of IxD. Suspending it makes little sense.',
                author: 'Plynne Polischuik',
                credential: 'Founder, The Republic of Quality',
                imageUrl: 'people/lynne-polischuik.jpg',
                type: 'photo',
                priority: 6,
                template: 'hero-box-templates/photo.html'
            },
             {
                quote: 'My son graduated from this program and it has led him to a great career. Without the guidance and direction of the excellent instructors he could still be working at Starbucks',
                author: 'Catherine Patterson',
                credential: '',
                imageUrl: 'people/sean-patterson.jpg',
                type: 'photo',
                priority: 6,
                template: 'hero-box-templates/photo.html'
            },
             {
                quote: 'This is an important program for the future economy of Squamish. It is important to have trained employees for the tech sector.',
                author: 'Kerry Brown',
                credential: 'CIRA, Board of Directors',
                imageUrl: 'people/kerry-brown.jpg',
                type: 'photo',
                priority: 6,
                template: 'hero-box-templates/photo.html'
            }
        ];
        ];

        // Hero Grid Items (quote)

        $scope.quoteBoxes = [
            {
                quote: 'The vast majority of graduates of this program get jobs. Good, long term jobs.',
                author: 'Dave Rankin',
                type: 'quote',
                priority: 1,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'Coding is the new literacy.',
                author: 'Hank Leber',
                credential: 'CEO & Co-Founder GonnaBe',
                type: 'quote',
                priority: 1,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'For the foreseeable future, coding is one of the most important and desirable skills there is.',
                author: 'Asher Hunt',
                credential: 'Lead Mobile Designer, LivePerson',
                type: 'quote',
                priority: 3,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'It\'s the battle of the tech literate vs. the tech illiterate.',
                author: 'Hank Leber',
                credential: 'CEO & Co-Founder GonnaBe',
                type: 'quote',
                priority: 7,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'Learn to code. You won\'t regret it.',
                author: 'Hank Leber',
                credential: 'CEO & Co-Founder GonnaBe',
                type: 'quote',
                priority: 3,
                template: 'hero-box-templates/quote.html'
            }
              {
                quote: 'Great program - our son is a very successful grad of this program.',
                author: 'Kent Brownlow',
                credential: 'Parent',
                type: 'quote',
                priority: 6,
                template: 'hero-box-templates/quote.html'
            },
             {
                quote: 'This program is valuable to both industry and students. It is a proven winner. Cutting it is more than unfortunate but misguided.',
                author: 'Alvin Wasserman',
                credential: 'President,Wasserman+Partners',
                type: 'quote',
                priority: 6,
                template: 'hero-box-templates/quote.html'
            },
             {
                quote: 'Interactive Design is leading the charge in the cutting edge field of interactive/digital design....with a favourable reputation preceeding it.',
                author: 'Kristen Dillon',
                credential: 'INTE Student, September 2013',
                type: 'quote',
                priority: 6,
                template: 'hero-box-templates/quote.html'
            }
];


        // Hero Grid Items (vine embeds)

        $scope.vineBoxes = [
            // {
            //     title: 'Glitch Mob',
            //     embedUrl: 'http://vine.co/v/b55LOA1dgJU/embed/simple',
            //     type: 'video',
            //     priority: 5,
            //     template: 'hero-box-templates/vine.html'
            // }
        ];

        // Hero Grid Items (youtube embeds)

        $scope.youtubeBoxes = [
            {
                embedUrl: 'http://www.youtube.com/embed/NvK1F_odamo',
                type: 'video',
                priority: 4,
                template: 'hero-box-templates/youtube.html'
            },
            {
                embedUrl: 'http://www.youtube.com/embed/kJcPCIAGfeY',
                type: 'video',
                priority: 6,
                template: 'hero-box-templates/youtube.html'
            },
            {
                title: 'Myles Galvin, BBA',
                embedUrl: 'http://www.youtube.com/watch?v=4W5sBDRcZvA',
                type: 'video',
                priority: 6,
                template: 'hero-box-templates/youtube.html'
            },
             {
                title: 'Courtney Inman',
                embedUrl: 'http://www.youtube.com/watch?v=PRfYP8-CraU',
                type: 'video',
                priority: 4,
                template: 'hero-box-templates/youtube.html'
            },
             {
                title: 'Collin Stewart',
                embedUrl: 'http://www.youtube.com/watch?v=LUiP5q2X_fU',
                type: 'video',
                priority: 6,
                template: 'hero-box-templates/youtube.html'
            },
             {
                title: 'Jeffry Huyghebaert',
                embedUrl: 'http://www.youtube.com/watch?v=KyhzOiviZlg',
                type: 'video',
                priority: 4,
                template: 'hero-box-templates/youtube.html'
            },
             {
                title: 'Terence Mazon',
                embedUrl: 'http://www.youtube.com/watch?v=Tai8WRDpWOc',
                type: 'video',
                priority: 6,
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







