function Contact() {
  return (
    
    <div className="contacts">
      <p className="contacts-title">КОНТАКТЫ</p>
      <div className=" row-contacts">
        <div className="col ">
          <p className="general-office-title">Главный офис</p>
          <p className="general-office-adress">Пушкина 666, д. Колотушкина</p>
          <p className="general-office-adress">Садовая 10, п. 4</p>
        </div>

        <div className="col ">
          <p className="general-office-title">Телефоны</p>
          <p className="general-office-adress">8 (777) 666-69-13</p>
          <p className="general-office-adress">8 (800) 555-35-35</p>
        </div>

        <div className="col ">
          <p className="general-office-title">E-mail</p>
          <p className="general-office-adress">pippupu@mail.ru</p>
          <p className="general-office-adress">superprincess13@gmail.com</p>
        </div>

        <div className="col ">
          <p className="general-office-title">Доп. офис</p>
          <p className="general-office-adress">Невский 140, офис 1-5</p>
          <p className="general-office-adress">Школьная 80, п. 4</p>
        </div>
      </div>
      
    </div>
  );
}

export { Contact };
