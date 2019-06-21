var fs    = require("fs");

var names = [
    'artem',
    'vasia',
    'vania',
    'valera',
    'ala',
    'lala',
];

var key_skills = [
    'html',
    'css',
    'js',
    'jQ',
    'krasavcheg'
];

function generateProfile() {
    var profileObj = {
        name: null,
        profile_name: null,
        exp_years: null,
        key_skills: null,
    };

    profileObj.name = names[Math.floor(Math.random() * names.length)];
    profileObj.profile_name = profileObj.name + "_profile";
    profileObj.exp_years = Math.floor(Math.random() * 35) + " years";
    profileObj.key_skills = gen();

    function gen() {
        var rand =  Math.floor(Math.random() * key_skills.length);
        var randSkills =  [];

        for (var i = 0; i < rand; i++ ){
            var key_skill = key_skills[Math.floor(Math.random() * key_skills.length)];
            randSkills.push(key_skill);
        }
        return randSkills;
    }
    return profileObj;
}

var data = [];
for(var j=0; j < 10000; j++) {
    var profile = generateProfile();
    data.push(profile);
}

fs.writeFile('data.json', JSON.stringify(data, null, 4), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
