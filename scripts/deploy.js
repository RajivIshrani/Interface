async function main() {
  const PlaneInteractor = await ethers.getContractFactory("PlaneInteractor");

  // Start deployment, returning a promise that resolves to a contract object
  const plane_registry = await PlaneInteractor.deploy();
  console.log("Contract deployed to address:", plane_registry.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
