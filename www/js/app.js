

requirejs(['./WebSocket', './MsgListener'],
    function(socket, listener, mapCanvas) {
        /*
         listener.init(function() {
            socket.connect(listener); // TODO: uncomment when server available
         });
        */

        // MOCK DATA
        var mockData = '{"players":[{"id":"111","x":1.0,"y":1.0,"velocity":{"x":5,"y":10},"name":"Juki","maxHp":50,"currentHp":10,"speed":50.0,"sight":50.0,"hearing":50.0,"team":1,"weapon":{"firingSpeed":50.0,"damage":50,"carry":50.0,"noise":50.0}},{"id":"222","x":8.5,"y":3.5,"velocity":{"x":-1.0,"y":0.0},"name":"Antti","maxHp":10,"currentHp":10,"speed":90.0,"sight":90.0,"hearing":10.0,"team":2,"weapon":{"firingSpeed":10.0,"damage":90,"carry":90.0,"noise":90.0}},{"id":"333","x":2,"y":5.0,"velocity":{"x":1,"y":-4},"name":"Robberi","maxHp":30,"currentHp":27,"speed":70.0,"sight":5.0,"hearing":95.0,"team":3,"weapon":{"firingSpeed":5.0,"damage":95,"carry":5.0,"noise":5.0}}],"tiles":[{"type":0,"x":0,"y":0},{"type":0,"x":1,"y":0},{"type":0,"x":2,"y":0},{"type":0,"x":3,"y":0},{"type":0,"x":4,"y":0},{"type":0,"x":5,"y":0},{"type":0,"x":6,"y":0},{"type":0,"x":7,"y":0},{"type":0,"x":8,"y":0},{"type":0,"x":9,"y":0},{"type":0,"x":0,"y":1},{"type":0,"x":1,"y":1},{"type":0,"x":2,"y":1},{"type":0,"x":3,"y":1},{"type":0,"x":4,"y":1},{"type":0,"x":5,"y":1},{"type":0,"x":6,"y":1},{"type":0,"x":7,"y":1},{"type":0,"x":8,"y":1},{"type":0,"x":9,"y":1},{"type":0,"x":0,"y":2},{"type":0,"x":1,"y":2},{"type":0,"x":2,"y":2},{"type":0,"x":3,"y":2},{"type":0,"x":4,"y":2},{"type":0,"x":5,"y":2},{"type":0,"x":6,"y":2},{"type":0,"x":7,"y":2},{"type":0,"x":8,"y":2},{"type":0,"x":9,"y":2},{"type":0,"x":0,"y":3},{"type":0,"x":1,"y":3},{"type":0,"x":2,"y":3},{"type":0,"x":3,"y":3},{"type":1,"x":4,"y":3},{"type":0,"x":5,"y":3},{"type":0,"x":6,"y":3},{"type":0,"x":7,"y":3},{"type":0,"x":8,"y":3},{"type":0,"x":9,"y":3},{"type":0,"x":0,"y":4},{"type":0,"x":1,"y":4},{"type":0,"x":2,"y":4},{"type":0,"x":3,"y":4},{"type":0,"x":4,"y":4},{"type":0,"x":5,"y":4},{"type":0,"x":6,"y":4},{"type":0,"x":7,"y":4},{"type":0,"x":8,"y":4},{"type":0,"x":9,"y":4},{"type":0,"x":0,"y":5},{"type":0,"x":1,"y":5},{"type":0,"x":2,"y":5},{"type":0,"x":3,"y":5},{"type":0,"x":4,"y":5},{"type":0,"x":5,"y":5},{"type":0,"x":6,"y":5},{"type":0,"x":7,"y":5},{"type":0,"x":8,"y":5},{"type":0,"x":9,"y":5},{"type":0,"x":0,"y":6},{"type":0,"x":1,"y":6},{"type":0,"x":2,"y":6},{"type":0,"x":3,"y":6},{"type":0,"x":4,"y":6},{"type":0,"x":5,"y":6},{"type":0,"x":6,"y":6},{"type":0,"x":7,"y":6},{"type":0,"x":8,"y":6},{"type":0,"x":9,"y":6}],"items":[{"type":"box1.png","x":4.3,"y":3.6},{"type":"box1.png","x":4.6,"y":3.2},{"type":"box1.png","x":4.2,"y":3.2}],"bullets":[],"sounds":[{"type":0,"x":164.0,"y":7.0,"accuracy":0}]}';
        listener.init(function() {
            listener.handle(mockData);
        });
    }
);