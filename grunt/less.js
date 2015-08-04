module.exports = {	
  less: {
    options: {
      paths: ["assets/less"],
      sourceMap:true,      
    },
    files: {            
        'css/main.css': ['assets/less/main.less'],
    }
  }, 
};