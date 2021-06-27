const EmailForm = () => {
  return (
    <form action='mail.php' method='POST'>
      <legend>Заголовок</legend>
      <div>
        <label>Имя</label>
        <input type='text' name='user_name' placeholder='Ваня' />
      </div>
      <div>
        <label>Фамилия</label>
        <input type='text' name='user_surname' placeholder='Иванов' />
      </div>
      <button type='submit'>Отправить</button>
    </form>
  );
};

export default EmailForm;
