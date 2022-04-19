if (!UserValidator.checkUserAuthorized(userId)) {
  throw new ResponseStatusException(
          HttpStatus.UNAUTHORIZED,
          "user is unauthorized, please sign in first:"
  );
}
String serverUrl = ServletUriComponentsBuilder.fromCurrentContextPath().toUriString();
String requestMapping = this.getClass().getAnnotation(RequestMapping.class).value()[0];
String imageMappingPath = serverUrl+ "/" +requestMapping + IMAGE_URL_MAPPING_POST_FIX;
Image updated = imageService.update(productId, images, imageMappingPath);
System.out.println(updated);
ResponseDto responseDto = new ResponseDto("Image updated.");
responseDto.addInfo("productId", String.valueOf(productId));
return ResponseEntity.ok(responseDto);