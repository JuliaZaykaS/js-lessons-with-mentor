class Junior{
    constructor(name='jun') {
        this._skills = ['html', 'css', 'js'];
        this.name = name;
    }

    addSkills(skill) {
        if (!skill) return;
        return (this.skills = [...this.skills, skill]);
        // return this.skills.push(skill);
    }
    get skills() {
        return this._skills;
    }
    set skills(skill) {
        if (!skill) return;
        return (this._skills = [...this._skills, skill]);
    }

    getFilteredSkills(skill) {
        // return this._skills.filter(el => el === skill);
        const result = this._skills.some(el => el === skill);
        return result ? 'да, он знает этот язык' : 'пусть ознакомится с этой технологией';

    }
    getSkillsCount() {
        return this._skills.reduce((acc, el)=>acc+1, 0)
    }
    getSortSkills() {
        // return this._skills.sort((el1, el2) => el1.localeCompare(el2));
        return this._skills.sort();
    }
}

const newJunior = new Junior('Julia');
console.log(newJunior);
// newJunior.addSkills();
// newJunior.addSkills('react');

newJunior.skills = 'node';
// console.log(newJunior.getFilteredSkills('css'));
console.log(newJunior.getFilteredSkills('css'));
console.log(newJunior.getFilteredSkills('c++'));
console.log(newJunior.getSkillsCount());
console.log(newJunior.getSortSkills());
