export function GetSuccessfulBookAddedStub(dynnamicBookId) {
  return {
    success: true,
    result: { bookId: dynnamicBookId === undefined ? 7 : dynnamicBookId, message: 'Book Added' }
  }
}
