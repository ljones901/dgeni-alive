/**
 * @dgProcessor computeWebsitePathsProcessor
 * @description Runs computePathsProcessor for autogenerated content just before writing files
 */
module.exports = function computeWebsitePathsProcessor(computePathsProcessor) {

  return {
//    $runAfter: ['computing-paths'],
    $runBefore: ['writing-files'],
    $process: function(docs) {
      computePathsProcessor.$process(docs);
    }
  };
};