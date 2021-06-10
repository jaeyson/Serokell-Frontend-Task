import './border.scss';
import './breakpoints.scss';
import './color.scss';
import './components.scss';
import './layout.scss';
import './position.scss';
import './reset.scss';
import './spacing.scss';
import './typography.scss';
import './width.scss';

const $ = x => document.querySelector(x);

const ready = (fn) => {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

ready(() => {
  window.addEventListener('scroll', () => {
    const header = $('header').style;
    const scrolledHeight = $('html').scrollTop;

    if (scrolledHeight > 100) {
      header.background = '#000000';
    } else {
      header.background = 'transparent';
    }
  });

  const toggleMobileButton = () => {
    $('.nav-mobile').classList.toggle('flex');
    $('.close').classList.toggle('hidden');
    $('.toggle').classList.toggle('hidden');
  };

  ['.toggle', '.close'].forEach(el => {
    $(el).addEventListener('click', () => {
      return toggleMobileButton();
    });
  });

  document.querySelectorAll('.nav-mobile-link').forEach(el => {
    el.addEventListener('click', () => {
      return toggleMobileButton();
    });
  });

  $('form.form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    let data = {
      "Name":    $('#name').value,
      "Email":   $('#email').value,
      "Message": $('#message').value,
    };

    console.table(data);
    $('form.form').reset();
  });

});
