(function () {
    "use strict"
    let object1 = {value: 10};
    let object2 = object1;
    let object3 = {value: 10};

    console.log(object1 === object2);
    console.log(object1 === object3)
    object1.value = 15;
    console.log(object1.value);
    console.log(object3.value);
    console.log(object2.value)
    const score = {visitors: 0, home: 0}
    // This is okay
    score.visitors = 1;
    // This is not okay
    // score = {visitors: 1, home: 1}
    let journal = [];

    function addEntry(events, squirrel) {
        journal.push({events, squirrel});
    }

    addEntry(["work", "touched tree", "pizza", "running", "television"], false);
    addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
    addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

    function phi(table){
        return (table[3] * table[0] - table[2] * table[1])/
            Math.sqrt((table[2] + table[3]) *
                         (table[0] + table[1]) *
                         (table[1] + table[3]) *
                         (table[0] + table[2]));
    }
    var JOURNAL = [
        {"events":["carrot","exercise","weekend"],"squirrel":false},
        {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
        {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
        {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
        {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
        {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
        {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
        {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
        {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
        {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
        {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
        {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
        {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
        {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
        {"events":["brushed teeth","computer","work"],"squirrel":false},
        {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
        {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
        {"events":["brushed teeth","work"],"squirrel":false},
        {"events":["cauliflower","reading","weekend"],"squirrel":false},
        {"events":["bread","brushed teeth","weekend"],"squirrel":false},
        {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
        {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
        {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
        {"events":["spaghetti","nachos","work"],"squirrel":false},
        {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
        {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
        {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
        {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
        {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
        {"events":["potatoes","exercise","work"],"squirrel":false},
        {"events":["pizza","ice cream","computer","work"],"squirrel":false},
        {"events":["lasagna","ice cream","work"],"squirrel":false},
        {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
        {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
        {"events":["potatoes","brushed teeth","work"],"squirrel":false},
        {"events":["carrot","work"],"squirrel":false},
        {"events":["pizza","beer","work","dentist"],"squirrel":false},
        {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
        {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
        {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
        {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
        {"events":["lasagna","peanuts","work"],"squirrel":true},
        {"events":["pizza","work"],"squirrel":false},
        {"events":["potatoes","exercise","work"],"squirrel":false},
        {"events":["brushed teeth","exercise","work"],"squirrel":false},
        {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
        {"events":["pizza","cycling","weekend"],"squirrel":false},
        {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
        {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
        {"events":["pizza","peanuts","candy","work"],"squirrel":true},
        {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
        {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
        {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
        {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
        {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
        {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
        {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
        {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
        {"events":["bread","candy","work"],"squirrel":false},
        {"events":["potatoes","nachos","work"],"squirrel":false},
        {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
        {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
        {"events":["brussel sprouts","running","work"],"squirrel":false},
        {"events":["brushed teeth","work"],"squirrel":false},
        {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
        {"events":["candy","brushed teeth","work"],"squirrel":false},
        {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
        {"events":["bread","brushed teeth","weekend"],"squirrel":false},
        {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
        {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
        {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
        {"events":["lettuce","brushed teeth","work"],"squirrel":false},
        {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
        {"events":["pizza","brushed teeth","work"],"squirrel":false},
        {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
        {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
        {"events":["brushed teeth","running","work"],"squirrel":false},
        {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
        {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
        {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
        {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
        {"events":["carrot","reading","weekend"],"squirrel":false},
        {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
        {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
        {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
        {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
        {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
        {"events":["lettuce","brushed teeth","work"],"squirrel":false},
        {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
        {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
    ];

// This makes sure the data is exported in node.js —
// `require('./path/to/journal.js')` will get you the array.
    function tableFor(event, journal){
        let table = [0, 0, 0, 0];
        for( let i = 0; i < journal.length; i++){
            let entry = journal[i], index = 0;
            if (entry.events.includes(event)) index += 1;
            if (entry.squirrel) index+= 2;
            table[index] += 1;
        }
        return table;
    }

    for(let entry of JOURNAL){
        console.log(`${entry.events.length} events.`);
    }
    for(let name of 'malik'){
        console.log(name)
    }
    console.log(tableFor("pizza", JOURNAL));
//     console.log(phi( [76,9, 4, 1]));
    function journalEvents(journal){
        let events = [];
        // for every entry of journal in other words for every index of journal
        for(let entry of journal){
            // for every event of entry
            for(let event of entry.events) {
                if (!events.includes(event)) {
                    events.push(event);
                }
            }
        }
        return events;
    }
    console.log(journalEvents(JOURNAL));
    console.log([0,1,2,3,4,5].indexOf(2));
    console.log([4,2,34,1].lastIndexOf(34));
    console.log([54, 0, 43, 2, 11, 133].slice(1,4)); //0 43 2
    console.log([54, 0, 43, 2, 11, 133].slice(0,1)); // 54

    // function remove(array, index){
    //     return array.slice(0, index)
    //         .concat(array.slice(index + 1));
    // }

    // console.log(    remove([1, 2, 3, 'malik', 36], 4));
    //  let kim = "Kim";
    //  kim.age = 88;
    // console.log(kim.age);
    console.log("one two three".indexOf('ee'));
    console.log("   okay\n ".trim());
    console.log(String(6).padStart(3, "0"));
    let sentence ='Secretary birds specialize in stomping';
    // let words = sentence.split(" ");
    // console.log(words);
    // console.log(words.join(". "));
    console.log("LA".repeat(3));
    let number = [3, 5, 7];
    console.log(Math.max(...number));
    let words = ['never', 'fully'];
    console.log(['will', ...words, 'understand']);
})();