var pet = function(spec){
    var it = {};

    it.get_name = function(){
        return spec.name
    };

    it.sound = function(){
        return spec.make_sound;
    }
return it;
};




var person = {
    name: "John",
    getName: function(){
        console.log{this.name}
    }
}
person.getName()