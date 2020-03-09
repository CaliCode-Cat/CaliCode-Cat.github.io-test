'use strict';
(function () {
  /*
  Instead of Number() -> parseInt()
  IIFE
  */

  const questionText = document.querySelector('.question__text');
  const questionTemplate = document.querySelector('#question-option').content.querySelector('.question__option');
  const questionOptions = document.querySelector('.question__options');
  const questionOptionsBox = document.querySelector('.question__options-box');
  
  const questionArea = document.querySelector('.question');
  const quizScore = document.querySelector('.quiz-results__score');
  const countBox = document.querySelector('.question__animation-count');
  const langList = document.querySelector('.languages-list');



  const Questions = function () {
    this.data = [];
    this.count = 0;
    this.totalScore = 0;
    this.attempts = 0;
    this.actualQn = null;

    this.nextBtn = document.querySelector('.question__next');
    this.questionForm = document.querySelector('.question__form');
    this.tryAgainBtn = document.querySelector('.question__try-again');
    this.okBtn = document.querySelector('.question__submit');
    this.resultsBtn = document.querySelector('.question__results');
    // this.quitBtn = document.querySelector('.question__reset');
  };

  const Question  = function (dataEl) {
    this.question = dataEl.question;
    this.answers = dataEl.answers;
    this.correctAnswAmount = this.answers.reduce((acc, cur) => {
      return cur['correct'] ? acc += 1 : acc;
    }, 0);
    this.options = [];
    this.selectedAnswers = [];
    this.type = dataEl.type;
    this.allCorrect = true;
    this.attempts = 0;
    this.score = 0;
  };

  Questions.prototype.getQuestion = function (dataEl) {
    console.log('SIGNAL',this.data[this.count], this.count);
    this.actualQn = new Question(dataEl);
    this.actualQn.renderQnText();
    this.actualQn.renderQnOptions(this.okBtn);
    this.okBtn.disabled = true;
  };

  Questions.prototype.deleteQuestion = function () {
    questionText.textContent = '';
    this.actualQn.deleteOpts();
  };

  Questions.prototype.reset = function () {
    this.okBtn.disabled = true;
    this.okBtn.classList.remove('question__btn--none');
    this.nextBtn.classList.add('question__btn--none');
    this.resultsBtn.classList.add('question__btn--none');
    this.tryAgainBtn.classList.add('question__btn--none');
    questionArea.classList.add('question--none');
    
    this.deleteQuestion();
  };

  Questions.prototype.countTotalScore = function () {
    this.count += 1;
    if (this.actualQn.allCorrect) {
      this.totalScore += this.actualQn.score;
    }
  };

  Questions.prototype.nextBtnPressHandler = function () {
    this.countTotalScore();
    this.deleteQuestion();
    countBox.textContent = `${this.count + 1} / ${this.data.length}`;

    if (this.data[this.count]) {
      this.getQuestion(this.data[this.count]);

      this.nextBtn.classList.add('question__btn--none');
      this.tryAgainBtn.classList.add('question__btn--none');
      this.okBtn.classList.remove('question__btn--none');
    }
  };

  Questions.prototype.resultsBtnPressHandler = function () {
    this.countTotalScore();
    this.deleteQuestion();
    window.getResults(this.totalScore, this.count);
    this.reset();
  };

  /*Questions.prototype.quitBtnPressHandler = function () {
    this.reset();
    langList.classList.remove('languages-list--none');
  };*/

  Questions.prototype.questionFormSubmitHandler = function (evt) {
    evt.preventDefault();
    this.attempts += 1;
    this.actualQn.submitHandler(this.okBtn, this.nextBtn, this.tryAgainBtn);

    this.okBtn.classList.add('question__btn--none');

    if (this.data.length - this.count === 1) {
      this.nextBtn.classList.add('question__btn--none');
      this.resultsBtn.classList.remove('question__btn--none');
    }
    if (this.data.length - this.count > 1) {
      this.nextBtn.classList.remove('question__btn--none');
    }
  };

  Questions.prototype.createListeners = function () {
    this.nextBtn.addEventListener('click', () => {
      this.nextBtnPressHandler();
    });

    this.questionForm.addEventListener('submit', (evt) => {
      this.questionFormSubmitHandler(evt);
    });

    this.resultsBtn.addEventListener('click', () => {
      this.resultsBtnPressHandler();
    });

    /*this.quitBtn.addEventListener('click', () => {
      this.quitBtnPressHandler();
    });*/
  };

  Question.prototype.renderQnOption = function (answer, key, okButton) {
    const qnOpt = questionTemplate.cloneNode(true);
    const qnLable = qnOpt.querySelector('label');
    const qnInput = qnOpt.querySelector('input');
    qnInput.id = `${key}`;
    qnInput.value =  `qn-${qnInput.id}`;
    qnInput.name = this.type === 'radio' ? 'qn' : `qn-${key}`;
    qnInput.type = this.type;
    qnLable.textContent = answer['answer'];
    qnLable.htmlFor = qnInput.id;

    qnLable.classList.add(`question__label--${this.type}`);

    qnInput.classList.add('visually-hidden');


    qnInput.addEventListener('change', (evt) => {
      evt.preventDefault();
      if (evt.target.checked && this.type === 'checkbox') {
        this.selectedAnswers.push(evt.target.id);
        okButton.disabled = false;
      }
      if (!evt.target.checked && this.type === 'checkbox') {
        this.selectedAnswers.splice(this.selectedAnswers.indexOf(evt.target.id), 1);
        if (!this.selectedAnswers.length) {
          okButton.disabled = true;
        }
      }

      if (this.type === 'radio') {
        this.selectedAnswers = [evt.target.id];
        okButton.disabled = false;
      }
    });
    
    return qnOpt;
  };

  Question.prototype.renderQnText = function () {
    questionText.textContent = this.question;
  };

  Question.prototype.renderQnOptions = function (okButton) {
    const fragment = document.createDocumentFragment();
    this.answers.forEach((it, key) => {
      this.options.push(this.renderQnOption(it, key, okButton));
      fragment.appendChild(this.options[key]);
    });

    questionOptionsBox.appendChild(fragment);
  };

  Question.prototype.checkAnswers = function () {
    this.selectedAnswers.forEach((it) => {
      if (this.answers[it].correct) {
        this.options[it].children[1].classList.add('question__label--correct');
      }
      if (!this.answers[it].correct) {
        this.options[it].children[1].classList.add('question__label--error');
        this.allCorrect = false;
      }
    });

    if (this.allCorrect && this.selectedAnswers.length < this.correctAnswAmount) {
      this.allCorrect = false;
    }
  };

  Question.prototype.submitHandler = function (okButton, nextButton, tryAgainButton) {
    this.attempts += 1;
    this.score = 1 / this.attempts;
    this.checkAnswers();

    this.options.forEach((it) => {
      it.children[0].disabled = true;
    });

    if (!this.allCorrect) {
      tryAgainButton.classList.remove('question__btn--none');
      tryAgainButton.addEventListener('click', (evt) => {

        okButton.disabled = true;
        okButton.classList.remove('question__btn--none');
        nextButton.classList.add('question__btn--none');

        this.allCorrect = true;

        this.options.forEach((it) => {
          this.selectedAnswers = [];
          it.children[0].disabled = false;
          it.children[0].checked = false;
          it.children[1].classList.remove('question__label--error');
          it.children[1].classList.remove('question__label--correct');
        });

        tryAgainButton.classList.add('question__btn--none');
      });

      window.lottie.renderAnim(false, 3200);
    }

    if (this.allCorrect) {
      window.lottie.renderAnim(true, 3200);
    }
  };


  Question.prototype.deleteOpts = function () {
    while (this.options.length) {
      questionOptionsBox.removeChild(this.options.pop());
    }
  };


  window.initQuestions = function (langData) {
    const qns = new Questions();
    qns.data = langData; //for processed data
    countBox.textContent = `${1} / ${qns.data.length}`;

    qns.getQuestion(qns.data[qns.count]);
    qns.createListeners();
    return qns;
  };

})();


