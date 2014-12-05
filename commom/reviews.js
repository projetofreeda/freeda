reviews = new Meteor.Collection('reviews')

reviews.attachSchema(new SimpleSchema({
  nomeLocal: {
    type: String,
    label: "Nome do local",
    max: 200
  },
  endereco: {
    type: String,
    label: "Endereço",
    max: 200
  },
  atendimento: {
    type: Number,
    label: "Atendimento",
    allowedValues: [0,1,2,3,4,5]
  },
  publico: {
    type: Number,
    label: "Público",
    allowedValues: [0,1,2,3,4,5]
  },
  comentario: {
    type: String,
    label: "Comentário",
    optional: true,
    max: 1000
  },
  banheiro: {
    type: Boolean,
    label: "Tive acesso ao banheiro com o qual me identifico",
    optional: true,
  },
  nomesocial: {
    type: Boolean,
    label: "Meu nome social foi respeitado",
    optional: true,
  },
  afeto: {
    type: Boolean,
    label: "Me senti à vontade para demonstrar afeto",
    optional: true,
  },
  acessibilidade: {
    type: Boolean,
    label: "Não tive problemas de acessibilidade",
    optional: true,
  },
  discriminacao: {
    type: [String],
    label: "Sofri ou presenciei discriminação",
    allowedValues: ["homofobia",
                    "lesbofobia",
                    "bifobia",
                    "transfobia",
                    "machismo",
                    "sexismo",
                    "misoginia",
                    "xenofobia",
                    "racismo",
                    "discriminação por classe social",
                    "discriminação por idade",
                    "discriminação religiosa",
                    "agressão física",
                    "violência psicológica",
                    "violência simbólica"],
    optional: true,
  },

}));

SimpleSchema.debug = true;