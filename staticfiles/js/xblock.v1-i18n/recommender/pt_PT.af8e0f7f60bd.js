
            (function(global){
                var RecommenderXBlockI18N = {
                  init: function() {
                    

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "&lt; Related resources": "&lt; Recursos relacionados",
    "A resource was clicked": "Um recurso foi clicado",
    "Add new resource": "Adicionar novo recurso",
    "Add new resource &gt;&gt;": "Adicionar novo recurso &gt;&gt;",
    "Add resource": "Adicionar recurso",
    "Back to resource list mode": "Voltar ao modo de lista de recursos",
    "Check the icon to endorse this resource": "Assinale o \u00edcone para apoiar este recurso",
    "Click to view resources for removal": "Clique para ver os recursos para remo\u00e7\u00e3o",
    "Click to view resources in ordinary decreasing-vote order": "Clique para ver os recursos por ordem decrescente de votos",
    "Configuration setting": "Defini\u00e7\u00e3o de configura\u00e7\u00f5es ",
    "Cut-and-paste the URL of the resource.": "Copiar e colar o URL do recurso.",
    "Delete this resource": "Eliminar este recurso",
    "Description": "Descri\u00e7\u00e3o",
    "Do you want to disable the UX functions which are under development?": "Pretende desativar as fun\u00e7\u00f5es de UX que est\u00e3o ainda em desenvolvimento?",
    "Do you want to take users on a little tour when they see the RecommenderXBlock first time?": "Quer levar os utilizadores numa pequena visita guiada quando veem o RecommenderXBlock pela primeira vez?",
    "Download resources": "Transferir recursos",
    "Downvote if the resource is not helpful": "Votar negativamente se o recurso n\u00e3o for \u00fatil",
    "Edit existing resource": "Editar recurso existente",
    "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.": "Edite o recurso e torne-o mais \u00fatil para outros estudantes com este problema. Por favor, n\u00e3o d\u00ea a resposta diretamente.",
    "Edit this resource": "Editar este recurso",
    "Endorse Resource": "Aprovar recurso",
    "Endorse resource": "Aprovar recurso",
    "Endorse resource without permission": "Aprovar recurso sem permiss\u00e3o",
    "Endorse this resource and give the reason why you do that.": "Aprove este recurso e indique a raz\u00e3o pela qual o faz.",
    "Entering add resource mode": "A entrar no modo de adicionar recurso",
    "Entering edit resource mode": "A entrar no modo de edi\u00e7\u00e3o de recurso",
    "Entering flag resource mode": "A entrar no modo de assinalar o recurso",
    "Entering import resource mode": "A entrar no modo de importa\u00e7\u00e3o de recursos",
    "Export resources": "Exportar recursos",
    "Flag Resource": "Assinalar Recurso",
    "Flag resource": "Assinalar recurso",
    "Flag this resource as problematic and give your reason": "Assinale este recurso como problem\u00e1tico e indique a sua raz\u00e3o",
    "From page {fromPage} To page {toPage}": "Da p\u00e1gina {fromPage} Para a p\u00e1gina {toPage}",
    "Give a meaningful reason for why this resource should be removed": "Apresente uma raz\u00e3o v\u00e1lida para remover este recurso",
    "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title": "Apresente um par\u00e1grafo de resumo do recurso; o resumo deve ser mais pormenorizado do que o apresentado no t\u00edtulo",
    "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them": "Apresente um breve resumo (1-3 frases) do recurso; idealmente, deve ser conciso, mas com pormenores suficientes para que os alunos saibam se o recurso lhes \u00e9 \u00fatil",
    "Go back to the main list": "Voltar \u00e0 lista principal",
    "Here is a list of reasons why students think this resource problematic:": "Aqui est\u00e1 uma lista de raz\u00f5es pelas quais os alunos consideram este recurso problem\u00e1tico:",
    "Hide related resources": "Ocultar recursos relacionados",
    "Hide the recommendations list": "Ocultar a lista de recomenda\u00e7\u00f5es",
    "Hovering resource": "Pairar recurso",
    "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.": "Quantos \u00edcones de p\u00e1gina no controlo de pagina\u00e7\u00e3o (por exemplo, intervalo de p\u00e1ginas)? Ser\u00e3o apresentados os \u00edcones das p\u00e1ginas de (p\u00e1gina atual - intervalo de p\u00e1ginas) a (p\u00e1gina atual + intervalo de p\u00e1ginas).",
    "How many resources you want to show in each page of the resource list?": "Quantos recursos pretende mostrar em cada p\u00e1gina da lista de recursos?",
    "Import resources": "Importar recursos",
    "Invalid location URL provided": "URL de localiza\u00e7\u00e3o inv\u00e1lido fornecido",
    "Location": "Local",
    "No": "N\u00e3o",
    "Only staff can import resources": "Apenas a equipa pode importar recursos",
    "Please submit the JSON file obtained with the download resources button": "Por favor, submeta o ficheiro JSON obtido com o bot\u00e3o de transferir recursos",
    "Preview image (typically, a screenshot)": "Imagem de pr\u00e9-visualiza\u00e7\u00e3o (normalmente, uma captura de ecr\u00e3)",
    "Preview screenshot:": "Pr\u00e9-visualiza\u00e7\u00e3o da captura de ecr\u00e3:",
    "Provide a file of resource list in JSON format": "Forne\u00e7a um ficheiro com a lista de recursos em formato JSON",
    "Provide a file of resource screenshot": "Forne\u00e7a um ficheiro com a captura de ecr\u00e3 do recurso",
    "Provide a meaningful description so other students know whether this is useful to them": "Forne\u00e7a uma descri\u00e7\u00e3o relevante para que os outros alunos saibam se este recurso \u00e9 \u00fatil para eles",
    "Provide a meaningful title so other students know whether this is useful to them": "Forne\u00e7a um t\u00edtulo relevante para que os outros alunos saibam se este recurso \u00e9 \u00fatil para eles",
    "Provide a resource description": "Forne\u00e7a uma descri\u00e7\u00e3o do recurso",
    "Provide a resource location in url, required": "Fornecer uma localiza\u00e7\u00e3o de recurso em url, obrigat\u00f3rio",
    "Provide a resource screenshot": "Forne\u00e7a uma captura de ecr\u00e3 do recurso",
    "Provide a resource title, required": "Fornecer um t\u00edtulo de recurso, obrigat\u00f3rio",
    "Reason": "Raz\u00e3o",
    "Reason for why this resource should be endorsed": "Raz\u00e3o pela qual este recurso deve ser aprovado",
    "Reason for why this resource should be flagged": "Motivo pelo qual este recurso deve ser assinalado",
    "Reason for why this resource should be removed": "Raz\u00e3o pela qual este recurso deve ser removido",
    "Recommend a new resource which may be helpful to other students solving this problem": "Recomendar um novo recurso que possa ser \u00fatil a outros estudantes que estejam a resolver este problema",
    "Remove Resource": "Remover recurso",
    "Remove resource": "Remover recurso",
    "Remove this resource and give the reason why you do that": "Remover este recurso e indicar a raz\u00e3o ",
    "Remove this resource and give the reason why you do that.": "Remova este recurso e indique a raz\u00e3o pela qual o faz.",
    "Resource title": "T\u00edtulo do recurso",
    "Resource: ": "Recurso:",
    "Resources (in JSON format):": "Recursos (em formato JSON):",
    "Save change": "Guardar altera\u00e7\u00f5es",
    "Set the student-view, client side configurations for RecommenderXblock.": "Definir as configura\u00e7\u00f5es do lado do cliente e da vista do aluno para o RecommenderXblock.",
    "Show a list of student-recommented related resources": "Mostrar uma lista de recursos recomendados por alunos relacionados ",
    "Show related resources": "Mostrar recursos relacionados",
    "Size of uploaded file exceeds threshold": "O tamanho do ficheiro enviado excede o limite",
    "Suggest a resource which can help other students with this problem. Please do not give the answer directly.": "Sugira um recurso que possa ajudar outros estudantes com este problema. Por favor, n\u00e3o d\u00ea a resposta diretamente.",
    "Suggest resource": "Sugerir recursos",
    "The configuration of pyfs is not properly set": "A configura\u00e7\u00e3o de pyfs n\u00e3o est\u00e1 definida corretamente",
    "The content you typed has not been submitted yet. Are you sure to go back?": "O conte\u00fado que escreveu ainda n\u00e3o foi submetido. Tem a certeza de que quer voltar atr\u00e1s?",
    "The reason why it is endorsed is:": "A raz\u00e3o pela qual \u00e9 aprovado \u00e9:",
    "The resource you are attempting to provide already exists": "O recurso que est\u00e1 a tentar disponibilizar j\u00e1 existe",
    "The resource you are attempting to provide has been disallowed by the staff. Reason: ": "O recurso que est\u00e1 a tentar disponibilizar n\u00e3o foi aprovado pela equipa. Motivo:",
    "The selected resource does not exist": "O recurso selecionado n\u00e3o existe",
    "This is a list of recommended resources. If you\\": "Esta \u00e9 uma lista de recursos recomendados. Se voc\u00ea\\",
    "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.": "Esta \u00e9 uma lista de recursos que os seus colegas estudantes consideraram \u00fateis. Se encontrar outro recurso \u00fatil, seja em edx.org ou noutro local, adicione-o. Se puderes melhorar a descri\u00e7\u00e3o ou a pr\u00e9-visualiza\u00e7\u00e3o de um recurso, f\u00e1-lo tamb\u00e9m. Se considerar um recurso \u00fatil, d\u00ea-lhe um voto positivo. Se n\u00e3o for assim t\u00e3o \u00fatil, vote-o para baixo. Se tiver problemas (material ilegal, incorreto, etc.), assinale-o e informe-nos do motivo.",
    "This resource is endorsed by staff": "Este recurso \u00e9 aprovado pelo staff",
    "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.": "Esta ser\u00e1 uma lista de recursos que os seus colegas consideraram \u00fateis, mas neste momento ainda est\u00e1 vazia. Se encontrar recursos \u00fateis, quer em edx.org quer noutro s\u00edtio, adicione-os.",
    "Title": "T\u00edtulo",
    "Tried to access flagged resources without staff permission": "Tentou aceder a recursos sinalizados sem a permiss\u00e3o da equipa",
    "Unendorse resource": "Retirar aprova\u00e7\u00e3o de recurso",
    "Unflag resource": "Retirar assinala\u00e7\u00e3o do curso",
    "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them": "Carregue uma captura de ecr\u00e3 de pr\u00e9-visualiza\u00e7\u00e3o (em GIF/PNG/JPG) do recurso; idealmente, esta deve permitir aos alunos saber se este recurso \u00e9 \u00fatil para eles",
    "Upload resources": "Carregar recursos",
    "Upload resources in JSON format to the database.": "Carregar recursos em formato JSON para a base de dados.",
    "Upvote if the resource is helpful": "Votar positivamente se o recurso for \u00fatil",
    "Votes": "Votos",
    "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.": "Por que raz\u00e3o gostaria de assinalar este recurso? A equipa analisar\u00e1 todos os recursos assinalados e remover\u00e1 os inadequados (spam, incorrectos, abusivos, etc.). Se nos der uma raz\u00e3o clara, ajudar\u00e1 a tornar o processo mais eficiente.",
    "Yes": "Sim",
    "You don't have the permission to remove this resource": "N\u00e3o tem permiss\u00e3o para remover este recurso",
    "cancel and go back to resource list": "cancelar e voltar \u00e0 lista de recursos",
    "mode": "modo",
    "votes": "votos"
  };
  for (const key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      const value = django.catalog[msgid];
      if (typeof value === 'undefined') {
        return msgid;
      } else {
        return (typeof value === 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      const value = django.catalog[singular];
      if (typeof value === 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      let value = django.gettext(context + '\x04' + msgid);
      if (value.includes('\x04')) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      let value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.includes('\x04')) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \u00e0\\s H:i",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%d/%m/%y %H:%M:%S",
      "%d/%m/%y %H:%M:%S.%f",
      "%d/%m/%y %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j \\d\\e F \\d\\e Y",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%d/%m/%Y",
      "%d/%m/%y"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "j \\d\\e F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i",
    "SHORT_DATE_FORMAT": "d/m/Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F \\d\\e Y"
  };

    django.get_format = function(format_type) {
      const value = django.formats[format_type];
      if (typeof value === 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }
};


                  }
                };
                RecommenderXBlockI18N.init();
                global.RecommenderXBlockI18N = RecommenderXBlockI18N;
            }(this));
        