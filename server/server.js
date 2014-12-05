Meteor.methods({
  sendEmail: function(doc) {
    // Important server-side check for security and data integrity
    check(doc, Schema.posts);

    // Build the e-mail text
    var text = "Local: " + doc.nomeLocal + "\n\n"
            + "Endereço: " + doc.endereco + "\n\n"
            + "Nota para o Atendimento: " + doc.atendimento + "\n\n"
            + "Nota para o publico: " + doc.publico + "\n\n\n\n"
            + doc.comentario;

    this.unblock();

    // Send the e-mail
    Email.send({
        to: "bwarena@gmail.com",
        from: "freeda@freeda.me",
        subject: "Nova avaliação:" + doc.nomeLocal,
        text: text
    });
  }
});